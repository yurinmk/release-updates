import React from 'react'
import Link from 'next/link'

import { Header } from '../components/Header'
import { Input } from '../components/Header/Input'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="flex flex-col w-screen h-screen">
        <Header />

        <form className="flex flex-col w-2/4 h-3/4 self-center justify-around">
          <Image className="ml-auto mr-auto" src="/images/logoLinx.png" alt="Logo image" width={40} height={40} />

          <Input />

          <Input />

          <input
            className="bg-primary text-white text-base font-bold py-2 px-4 border border-blue-700 rounded-md shadow-xl mt-1 cursor-pointer"
            type="submit"
            value="Entrar"
          />
        </form>
      </div>
    </React.Fragment>
  )
}
