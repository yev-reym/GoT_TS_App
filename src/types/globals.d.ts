
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
  houses?: ObjectGeneric<HouseList>
  books?: ObjectGeneric<BookList>
  currentPage?: number
  characters?: []
  character?: []
  loading?: boolean
  error?: string | null
}

declare type StoreContext = {
  bindedActions?: ObjectGeneric<(p?: any) => any>
} & StoreState

declare type ReducerType = (state: StoreState, action: Action) => StoreState

//////////////////////////////////// MODULES /////////////////////////////////////////////////

// Type declaration for scss module imports
declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
// For third party library component module declaration
declare module 'react-flip-page'

//////////////////////////////////// BOOKS ///////////////////////////////////////////////////

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

/////////////////////////////////// HOUSES /////////////////////////////////////////////////////

declare type HouseType = {
  name: string
  region: string
  coatOfArms: string
  words: string
  titles: string[]
  seats: string[]
  currentLord: string
  heir: string
  overlord: string 
  founded: string
  founder: string
  diedOut: string
  ancestralWeapons: string[]
  cadetBranches: string[]
  swornMembers: string[]
} & ObjectGeneric<string>

declare type HouseList = HouseType[]

