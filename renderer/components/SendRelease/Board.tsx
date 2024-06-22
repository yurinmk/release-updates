import React, { useCallback, useState } from 'react'

import { CircleCheckBig, FilePlus, Plus, SquarePen, Trash2 } from 'lucide-react'
import { useDropzone } from 'react-dropzone'

import { Split } from '../Split'
import { ThemeColors } from '../../styles/colors'
import { IBoard } from './types'
import { NoInfo } from './NoInfo'

export const Board = (props: IBoard) => {
  const [message, setMessage] = useState<string>('')
  const [indexMessage, setIndexMessage] = useState<number>()

  const [messages, setMessages] = useState<string[]>([])
  const [imagesName, setImagesName] = useState<string[]>([])
  const [files, setFiles] = useState<any[]>([])

  const [statusBtnDescription, setStatusBtnDescription] = useState<'edit' | 'add'>('add')

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length) {
        setImagesName([...imagesName, acceptedFiles[0].name])

        setFiles([...files, ...acceptedFiles])
      }
    },
    [imagesName],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  function addMessage(message: string) {
    if (!message.length) return

    setMessages([...messages, message])
    resetInfo()
  }

  function removeMessage(index: number) {
    setMessages(messages.filter((_, i) => i !== index))
  }

  function removeImageName(index: number) {
    setImagesName(imagesName.filter((_, i) => i !== index))
  }

  function editMessage(message: string, index: number) {
    setStatusBtnDescription('edit')
    setMessage(message)
    setIndexMessage(index)
  }

  function saveEditMessage(newMessage: string, index: number) {
    const newMessages = messages.map((item, i) => (i === index ? newMessage : item))

    setMessages(newMessages)
    resetInfo()
  }

  function resetInfo() {
    setMessage('')
    setIndexMessage(undefined)
    setStatusBtnDescription('add')
  }

  function formatImageName(name: string, startLength: number) {
    const lastDotIndex = name.lastIndexOf('.')

    if (lastDotIndex === -1 || name.length <= startLength) {
      return name
    }

    const start = name.substring(0, startLength)
    const end = name.substring(lastDotIndex, name.length)
    return `${start}...${end}`
  }

  return (
    <div className="flex flex-row relative w-full h-80 border-2 border-primary rounded-lg px-2 py-2 mt-5">
      <p className="absolute left-2 -top-4 text-base text-primary  px-1 bg-app">{props.title}</p>

      <div className="flex flex-col w-1/2 h-full pr-2 py-2">
        <div className="flex h-45p justify-around flex-col">
          <textarea
            rows={50}
            cols={50}
            className="w-full h-24 resize-none bg-white border-2 border-primary rounded-lg shadow-md shadow-gray pl-2 py-1 placeholder:text-sm"
            name="Descrição"
            id="Descrição"
            placeholder={props.placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <a
            href="#"
            className="flex flex-row w-1/2 h-8 items-center justify-center self-end rounded-md bg-purple-extra-light shadow-md shadow-gray my-1"
            onClick={() =>
              statusBtnDescription === 'add' ? addMessage(message) : saveEditMessage(message, indexMessage)
            }
          >
            {statusBtnDescription === 'add' ? (
              <Plus size={14} color={ThemeColors.black} strokeWidth={4} />
            ) : (
              <CircleCheckBig size={14} color={ThemeColors.black} strokeWidth={4} />
            )}
            <p className="text-base font-medium text-black pl-0.5">
              {statusBtnDescription === 'add' ? 'Uma Descrição' : 'Atualizar Descrição'}
            </p>
          </a>
        </div>

        <Split />

        <div className="flex h-45p flex-row">
          <div className="flex flex-col w-1/2 pl-1 pr-2" {...getRootProps()}>
            <input {...getInputProps()} />

            <p className="text-base text-primary pl-0.5">Evidências</p>

            <a
              href="#"
              className="flex flex-row w-full h-full items-center justify-center outline-primary outline-dashed outline-2 outline-offset-2 rounded-md"
            >
              <FilePlus color={ThemeColors.primary} />
              <p className="text-base font-medium text-primary px-0.5">Add arquivo</p>
            </a>
          </div>

          <Split type="vertical" />

          <div id="scroll" className="flex flex-col w-1/2 h-[100%] px-2 overflow-y-scroll">
            {imagesName.length ? (
              <>
                {imagesName.map((imageName, index) => (
                  <div key={index} className="flex flex-row items-center justify-between border-b border-gray ">
                    <p className="text-sm text-gray px-1">
                      {index + 1} - {formatImageName(imageName, 12)}
                    </p>

                    <a href="#" onClick={() => removeImageName(index)}>
                      <Trash2 size={15} color={ThemeColors.red} />
                    </a>
                  </div>
                ))}
              </>
            ) : (
              <NoInfo />
            )}
          </div>
        </div>
      </div>

      <Split type="vertical" />

      <div id="scroll" className="flex flex-col w-1/2 h-full px-2 py-2 overflow-y-scroll">
        {messages.length ? (
          <>
            {messages.map((itemMessage, index) => (
              <div className="flex flex-row border-b border-gray py-1 justify-between" key={index}>
                <p className="text-sm text-gray px-1 w-[90%]">
                  {index + 1} - {itemMessage}
                </p>

                <div className="flex w-[10%]">
                  <a href="#" className="mr-1">
                    <SquarePen size={15} color={ThemeColors.orange} onClick={() => editMessage(itemMessage, index)} />
                  </a>

                  <a href="#">
                    <Trash2 size={15} color={ThemeColors.red} onClick={() => removeMessage(index)} />
                  </a>
                </div>
              </div>
            ))}
          </>
        ) : (
          <NoInfo />
        )}
      </div>
    </div>
  )
}
