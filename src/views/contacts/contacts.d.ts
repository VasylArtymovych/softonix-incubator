interface IContact {
  id: number
  name: string
  description: string
  image?: string
}

type TActiveTab = 'cards' | 'table' | 'empty' | 'test'

interface ITab {
  label: string
  name: string
  class?: object | any[] | string
  hidden?: boolean
}

type TTabType = 'card' | 'border-card' | ''
