import { formatHousesData } from 'Utils/'

// Initial state
export const initialHousesState: StoreState = {
  houses: {},
  currentPage: 1,
  loading: false,
  error: null,
}

// Action Types
export const housesTypes: ObjectGeneric<string> = {
  RECEIVE_HOUSES: 'RECEIVE_HOUSES',
  RECEIVE_HOUSES_SUCCESS: 'RECEIVE_HOUSES_SUCCESS',
  RECEIVE_HOUSES_FAILURE: 'RECEIVE_HOUSES_FAILURE',
}

// Action creators
export const housesActions: ObjectGeneric<ActionCreator> = {
  fetchHousesSuccess: (housesData: HouseList) => ({
    type: housesTypes.RECEIVE_HOUSES_SUCCESS,
    payload: housesData,
  }),

  fetchHousesFailure: (error: string) => ({
    type: housesTypes.RECEIVE_HOUSES_FAILURE,
    error: error,
  }),

  fetchHouses: (pageNumber: number) => ({
    type: housesTypes.RECEIVE_HOUSES,
    payload: pageNumber,
  }),
}

// Reducer
export const housesReducer: ReducerType = (
  state: StoreState,
  action: Action
): StoreState => {
  const { payload } = action

  switch (action.type) {
    case housesTypes.RECEIVE_HOUSES:
      return { ...state, loading: true, currentPage: payload }
    case housesTypes.RECEIVE_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        houses: {
          ...state.houses,
          [`${state.currentPage}`]: formatHousesData(payload),
        },
      }
    case housesTypes.RECEIVE_HOUSES_FAILURE:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
