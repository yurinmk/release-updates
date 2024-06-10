import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="app-container" className="bg-app">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
