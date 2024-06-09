import path from 'path'
import { app, globalShortcut, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 550,
    height: 380,
    transparent: true,
    resizable: false, // Impede o redimensionamento
    frame: false, // Remove a barra de título
    autoHideMenuBar: true, // Oculta a barra de menu
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.restore()

    globalShortcut.register('CommandOrControl+Shift+I', () => {
      mainWindow.webContents.openDevTools()
    })
  }

  ipcMain.on('route-changed', (event, url) => {
    if (url === '/home') {
      mainWindow.setSize(400, 300)
    } else {
      mainWindow.setSize(800, 600)
    }
  })
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
