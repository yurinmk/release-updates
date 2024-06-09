import React from 'react'

import Image from 'next/image'

import { Header } from '../components/Header'
import { TextInput } from '../components/Inputs/TextInput'
import { Button } from '../components/Inputs/Button'
import { useRouter } from 'next/router'

export default function HomePage() {
  const router = useRouter()

  return (
    <React.Fragment>
      <div className="flex flex-col w-screen h-screen">
        <Header />

        <form className="flex flex-col w-2/4 h-3/4 self-center justify-around" onSubmit={() => router.push('/next')}>
          <Image className="ml-auto mr-auto" src="/images/logoLinx.png" alt="Logo image" width={40} height={40} />

          <TextInput label="Login" placeholder="Usuário" />

          <TextInput label="Senha" type="password" placeholder="****" />

          <Button text="Entrar" type="submit" typeStyle="primary" />
        </form>
      </div>
    </React.Fragment>
  )
}
