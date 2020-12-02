import React, { useState, useEffect } from 'react'
import Loader from 'Components/Loader'
import TableView from 'Components/Table'
import { useHousesContext } from '../../contexts/HousesContext'
import { useFetchGoTData } from '../../hooks'
import { houseListColumns } from 'Utils/table'
import styles from './styles.scss'

interface HouseListProps {
  location: LocationState
  match: { params: { houseId: number } }
}

type LocationState = {
  from: Location
  state: ObjectGeneric<string | string[]> & { goToPage: number }
}

const buildHousesQuery = (page: number) => `houses?page=${page + 1}&pageSize=30`

const HouseList: React.FC<HouseListProps> = ({ location }): JSX.Element => {
  const [query, setQuery] = useState<string>('')
  const [pageNumber, setPageNumber] = useState<number>(0)
  const {
    loading,
    error,
    houses = {},
    bindedActions,
    currentPage,
  } = useHousesContext()

  useEffect(() => {
    setQuery(buildHousesQuery(pageNumber))
  }, [pageNumber])

  useFetchGoTData(query, bindedActions, pageNumber)

  if (loading && !houses[pageNumber]) {
    return <Loader />
  }

  const renderError = () => (
    <span
      style={{
        fontSize: '25px',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        marginTop: '20px',
        display: 'block',
        fontFamily: 'Cinzel Decorative',
      }}
    >
      We are experiencing technical difficulties, we apologize!
    </span>
  )

  return (
    <>
      {houses[pageNumber] ? (
        <TableView
          data={houses[location?.state?.goToPage || pageNumber]}
          columns={houseListColumns}
          setPage={setPageNumber}
          pageNumber={location?.state?.goToPage || pageNumber}
        />
      ) : error ? (
        renderError()
      ) : null}
    </>
  )
}

export default HouseList
