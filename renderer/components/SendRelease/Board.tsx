import React from 'react'

import { FilePlus, Plus, Trash2 } from 'lucide-react'
import { Split } from '../Split'
import { ThemeColors } from '../../styles/colors'
import { IBoard } from './types'

export const Board = (props: IBoard) => {
  return (
    <div className="flex flex-row relative w-full h-64 border-2 border-primary rounded-lg px-2 py-2 mt-5">
      <p className="absolute left-2 -top-4 text-base text-primary  px-1 bg-app">{props.title}</p>

      <div className="flex-1 flex-col w-1/2 pr-2 py-2">
        <div className="flex flex-col h-1/2 ">
          <textarea
            rows={50}
            cols={50}
            className="w-full h-24 resize-none bg-white border-2 border-primary rounded-lg shadow-md shadow-gray pl-2 py-1 placeholder:text-sm"
            name="Descrição"
            id="Descrição"
            placeholder={props.placeholder}
          ></textarea>

          <a
            href="#"
            className="flex flex-row w-1/2 h-6 items-center justify-center self-end rounded-md bg-purple-extra-light shadow-md shadow-gray my-1"
          >
            <Plus size={13} color={ThemeColors.black} strokeWidth={4} />
            <p className="text-xs font-medium text-black pl-0.5">Uma Descrição</p>
          </a>
        </div>

        <Split />

        <div className="flex flex-row">
          <div className="flex flex-col w-1/2">
            <p className="text-sm  text-primary pl-0.5">Evidências</p>

            <a
              href="#"
              className="flex flex-row w-1full h-14 items-center justify-center rounded-md bg-purple-extra-light shadow-md shadow-gray mr-2 px-2"
            >
              <FilePlus color={ThemeColors.black} />
              <p className="text-xs font-medium text-black px-0.5">Add arquivo</p>
            </a>
          </div>

          <Split type="vertical" />

          <div id="scroll" className="px-2 flex flex-col w-1/2 h-24 overflow-y-scroll">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-row items-center justify-between border-b border-gray py-1">
                <p className="text-xs text-gray px-1">1 - arquivo.png</p>

                <a href="#">
                  <Trash2 size={15} color={ThemeColors.red} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Split type="vertical" />

      <div id="scroll" className="flex flex-col w-1/2 h-full px-2 py-2 overflow-y-scroll">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex flex-row border-b border-gray py-1" key={index}>
            <p className="text-xs text-gray px-1">
              1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate impedit eum debitis velit modi,
              aliquam deserunt nesciunt quidem molestias corporis recusandae, repudiandae ipsum suscipit ipsam.
              Architecto at ut nihil earum?
            </p>

            <a href="#">
              <Trash2 size={15} color={ThemeColors.red} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
