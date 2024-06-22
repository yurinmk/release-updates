export interface IBoard {
  title: string
  placeholder: string
}

export interface ISendRelease {
  onCancel: () => void
  onSend: (data: any) => void
}

export interface ISend {
  date: string
  version: string
  releases: IInfos
  bugs: IInfos
}

export interface IInfos {
  messages: string[]
  images: string[]
}
