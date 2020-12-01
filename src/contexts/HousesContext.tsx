import React, { createContext, useContext, useReducer } from 'react'
import {
  initialHousesState,
  housesActions,
  housesReducer,
} from 'Reducers/HousesReducer'

// Initialize store context
const HousesContext = createContext<StoreContext>({})

const HousesProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  // store values and dispatch
  const [housesState, dispatch] = useReducer(housesReducer, initialHousesState)

  // Bind Book actions to dispatch
  const fetchHouses = (pageNumber: number) =>
    dispatch(housesActions.fetchHouses(pageNumber))
  const fetchHousesSuccess = (payload: ObjectGeneric<HouseList>) =>
    dispatch(housesActions.fetchHousesSuccess(payload))
  const fetchHousesFailure = (error: string) =>
    dispatch(housesActions.fetchHousesFailure(error))

  const bindedActions: any = {
    fetchDispatchAction: fetchHouses,
    successDispatchAction: fetchHousesSuccess,
    failDispatchAction: fetchHousesFailure,
  }

  const state = { ...housesState, bindedActions }

  return (
    <HousesContext.Provider value={state}>{children}</HousesContext.Provider>
  )
}

// Custom hook to engage Books Context
const useHousesContext = () => {
  return useContext(HousesContext)
}

export { HousesProviderWrapper, useHousesContext }
