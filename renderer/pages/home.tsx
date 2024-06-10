import React, { useState } from 'react'

import { Header } from '../components/Header'
import { Button } from '../components/Inputs/Button'
import { CardList } from '../components/CardList'
import { SendRelease } from '../components/SendRelease'

export default function HomePage() {
  const [screenVisible, setScreenVisible] = useState<'list' | 'send'>('list')

  return (
    <React.Fragment>
      <div className="flex flex-col w-screen h-screen items-center">
        <Header />

        <div className="flex flex-col w-11/12 items-center justify-center px-5">
          <div className="flex flex-row w-full items-center justify-between">
            <Button
              className="w-45p h-16 text-xl rounded-xl"
              text="Lista de Versões"
              type="button"
              typeStyle={screenVisible === 'list' ? 'primary' : 'default'}
              onClick={() => setScreenVisible('list')}
            />

            <Button
              className="w-45p h-16 text-xl rounded-xl"
              text="Enviar uma Versão"
              type="button"
              typeStyle={screenVisible === 'send' ? 'primary' : 'default'}
              onClick={() => setScreenVisible('send')}
            />
          </div>

          {screenVisible === 'send' ? <SendRelease /> : <CardList />}
        </div>
      </div>
    </React.Fragment>
  )
}
