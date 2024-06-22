import React from 'react'
import { Split } from '../Split'
import { TextInput } from '../Inputs/TextInput'
import { Board } from './Board'
import { Button } from '../Inputs/Button'
import { ISendRelease } from './types'

export const SendRelease = (props: ISendRelease) => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-start mt-4">
      <Split />

      <div className="flex flex-row w-full items-center justify-between ">
        <div className="w-45p">
          <TextInput className="h-8" label="Data" placeholder="DD/MM/AAAA" />
        </div>

        <div className="w-45p">
          <TextInput className="h-8" label="Versão" placeholder="XX.XX.XX" />
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
        <Board title="Novidades" placeholder="Digite a descrição da novidade." />

        <Board title="Bugs" placeholder="Digite a descrição do bug." />

        <div className="flex w-full items-center justify-between">
          <Button
            className="w-45p text-xl rounded-xl"
            text="Cancelar"
            type="button"
            typeStyle="default"
            onClick={props.onCancel}
          />

          <Button
            className="w-45p text-xl rounded-xl"
            text="Entrar"
            type="button"
            typeStyle="primary"
            onClick={props.onSend}
          />
        </div>
      </div>
    </div>
  )
}
