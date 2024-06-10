import path from 'path'
import { app, globalShortcut, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { Constants } from '../renderer/constants'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: Constants.WINDOW_SIZE_LOGIN.width,
    height: Constants.WINDOW_SIZE_LOGIN.height,
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
    await mainWindow.loadURL('app://./login')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/login`)
    mainWindow.restore()

    globalShortcut.register('CommandOrControl+Shift+I', () => {
      mainWindow.webContents.openDevTools()
    })

    ipcMain.on('route-changed', (event, url) => {
      if (url === '/home') {
        mainWindow.setSize(400, 300)
      } else {
        mainWindow.setSize(800, 600)
      }
    })
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
