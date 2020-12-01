import React, { useState, useEffect, useRef } from 'react'
import { fetchRequest as getRequest } from 'Utils/'

// Toggle hook to pass state for drilldowns
export const useInfoToggle = (defaultState = false) => {
  const [toggleState, setToggleTo] = useState<boolean>(defaultState)

  const toggleAction = {
    // If no value is passed to switch toggle, we default to toggling to opposite of current state
    toggleTo: (toggle?: boolean) => setToggleTo(toggle ?? !toggleState),
  }
  return [toggleState, toggleAction] as const
}

////////////////////////////////////////////////// Custom fetch hook that caches url requests /////////////////////////////////////////////////////////////////

type Cache = ObjectGeneric<any>

export const useFetchGoTData = (
  query: string,
  dispatchBindedActions: any,
  fetchDispatchArg?: any | undefined
) => {
  const requestsCache: React.MutableRefObject<Cache> = useRef({})
  const _isMounted = useRef(true)

  const {
    fetchDispatchAction,
    successDispatchAction,
    failureDispatchAction,
  } = dispatchBindedActions

  useEffect(() => {
    return () => {
      _isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (!!query && query !== '') {
      const fetchData = async () => {
        fetchDispatchAction(fetchDispatchArg)

        if (!!requestsCache.current[query]) {
          const data = requestsCache.current[query]
          _isMounted.current && successDispatchAction(data)
        } else {
          try {
            const response: any =
              _isMounted.current && (await getRequest(query))

            const { data } = response

            requestsCache.current[query] = data

            _isMounted.current && successDispatchAction(data)
          } catch (error) {
            failureDispatchAction(error.message)
          }
        }
      }

      fetchData()
    }
  }, [query])
}
