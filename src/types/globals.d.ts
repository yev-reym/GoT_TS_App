
/* object generic type */
declare type ObjectGeneric<T> = {
  [key: string]: T
}

declare interface Action {
  type: string
  payload?: any
  error?: any
}

declare type ActionCreator = (p?: any) => Action

declare interface StoreState {
  house?: []
  houses?: []
  books?: ObjectGeneric<BookList>
  characters?: []
  character?: []
  loading?: boolean
  error?: string | null
}

declare type StoreContext = {
  bindedActions?: ObjectGeneric<(p?: any) => any>
} & StoreState

declare type ReducerType = (state: StoreState, action: Action) => StoreState

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module 'react-flip-page'

declare type BookType = {
  number: number
  name: string
  authors: string | string[]
  publisher: string
  numberOfPages: number
  isbn: string
  released: string
}

declare type BookList = BookType[]
