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

interface ITableHeading {
  label: string
  value: string
  sortable?: boolean
  sortMethod?: TCallbackFn<[any, any], number>
  width?: number
  align?: 'left' | 'right' | 'center'
  headerAlign?: string
  fixed?: boolean | string
  minWidth?: number
  className?: string
  colClassName?: string
  hideFromRender?: boolean
  isDate?: boolean
  formatter?: TFormatterFunction<T>
  showOverflowTooltip?: boolean
  headingClasses?: string
}
