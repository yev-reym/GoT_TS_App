import React, { useState, useEffect, useRef } from 'react'

// Toggle hook to pass state for drilldowns
export const useInfoToggle = (defaultState = false) => {
  const [toggleState, setToggleTo] = useState<boolean>(defaultState)

  const toggleAction = {
    // If no value is passed to switch toggle, we default to toggling to opposite of current state
    toggleTo: (toggle?: boolean) => setToggleTo(toggle ?? !toggleState),
  }
  return [toggleState, toggleAction] as const
}

type Cache = ObjectGeneric<any>

// Custom fetch hook that caches url requests
export const useFetchGoTData = (
  query: string,
  dispatchBindedActions: any,
  getRequest: (p?: any) => any
) => {
  const requestsCache: React.MutableRefObject<Cache> = useRef({})

  const {
    fetchDispatchAction,
    successDispatchAction,
    failureDispatchAction,
  } = dispatchBindedActions
  console.log('cache', requestsCache.current)
  useEffect(() => {
    // Set boolean var which will check for unmounting
    // If unmounted before side request is complete, we cancel the state update to prevent
    // React state change errors
    if (!query) return

    const fetchData = async () => {
      fetchDispatchAction()
      if (!!requestsCache.current[query]) {
        const data = requestsCache.current[query]
        successDispatchAction(data)
      } else {
        try {
          //   console.log('request', query)
          const response = await getRequest(query)
          //   console.log('response', response)
          const data = await response.data

          requestsCache.current[query] = data

          successDispatchAction(data)
        } catch (error) {
          failureDispatchAction(error.message)
        }
      }
    }

    fetchData()
  }, [query])
}
