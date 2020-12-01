// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Character from '../'
import Loader from 'Components/Loader'
import { fetchRequest as getRequest } from 'Utils/'
import ArrowLeftSharpIcon from '@material-ui/icons/ArrowLeftSharp'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import styles from '../styles.scss'

type LocationState = {
  from: Location
  state: { houseName: string; swornMembers: string[] }
}

interface SwornMember {
  url: string
  books?: string[]
  gender: string
}

interface SwornMembersProps {
  location: LocationState
  match: { params: { houseId: number } }
}

const SwornMembers: React.FC<SwornMembersProps> = ({ location, match }) => {
  const [currentFilter, setFilter] = useState('None')
  const [swornMembersList, setSwornMembersList] = useState<
    SwornMember[] | string[]
  >([])
  const [loading, setLoading] = useState<boolean>(false)
  const [hName, setHName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const history = useHistory()
  const _shouldAsync = useRef(true)

  const { houseId } = match.params
  const cameFromHouse = !!location?.state

  const filterSwornMembers = (swornMembers, filter: string): [] => {
    if (filter === 'None') {
      return swornMembers
    } else if (filter === 'Male' || filter === 'Female') {
      return swornMembers.filter((member) => {
        return member.gender === filter
      })
    } else {
      return swornMembers.filter((member) => {
        return !!member?.books.find(
          (book: string) => book[book.length - 1] === filter
        )
      })
    }
  }

  const fetchHouse = async () => {
    setLoading(true)
    try {
      const res: { data: HouseType } = await getRequest(`houses/${houseId}`)
      if (res.data) {
        const { swornMembers, name } = res.data
        setHName(name)
        setSwornMembersList(swornMembers)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  const bulkFetch = async () => {
    const sMembers: never[] = []
    for (const sMem of swornMembersList) {
      const sMemQuery = sMem.replace(`${process.env.API_REQUEST_DOMAIN}`, '')
      try {
        const res = await getRequest(`${sMemQuery}`)
        if (res.data) {
          sMembers.push(res.data)
        }
      } catch (error) {
        setError(error.message)
      }
    }
    _shouldAsync.current = false
    setSwornMembersList(sMembers)
    setLoading(false)
  }

  useEffect(() => {
    if (!cameFromHouse) {
      fetchHouse()
    } else {
      const {
        state: { swornMembers },
      } = location
      setLoading(true)
      setSwornMembersList(swornMembers)
    }
  }, [])

  useEffect(() => {
    if (
      Array.isArray(swornMembersList) &&
      swornMembersList.length !== 0 &&
      loading &&
      _shouldAsync.current
    ) {
      bulkFetch()
    }
  }, [JSON.stringify(swornMembersList)])

  useEffect(() => {
    return () => (_shouldAsync.current = true)
  }, [])

  const renderSwornMembers = (sMembers) => {
    return sMembers.map((swornMember, idx: number) => {
      return (
        <Character
          characterUrl={swornMember.url}
          key={idx}
          suppliedCharacterData={swornMember}
        />
      )
    })
  }

  if (loading || !swornMembersList.length) {
    return <Loader />
  }

  return (
    <section className={styles.members_container}>
      <div className={styles.section__top}>
        <span
          className={styles.backbtn}
          onClick={() =>
            cameFromHouse
              ? history.goBack()
              : history.push(`/houses/${houseId}`)
          }
        >
          <ArrowLeftSharpIcon />
          Back to Houses
        </span>
        {Array.isArray(swornMembersList) && swornMembersList.length !== 0 && (
          <FormControl variant={'outlined'}>
            <span style={{ marginBottom: '5px' }}>Filter By:</span>
            <InputLabel htmlFor="members-filter" />
            <Select
              defaultValue="None"
              autoWidth
              id="members-filter"
              onChange={(e) => setFilter(`${e.target.value}`)}
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <ListSubheader>Gender</ListSubheader>
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <ListSubheader>Books</ListSubheader>
              <MenuItem value={'1'}>Book 1</MenuItem>
              <MenuItem value={'2'}>Book 2</MenuItem>
              <MenuItem value={'3'}>Book 3</MenuItem>
              <MenuItem value={'4'}>Book 4</MenuItem>
              <MenuItem value={'5'}>Book 5</MenuItem>
              <MenuItem value={'6'}>Book 6</MenuItem>
              <MenuItem value={'7'}>Book 7</MenuItem>
              <MenuItem value={'8'}>Book 8</MenuItem>
              <MenuItem value={'9'}>Book 9</MenuItem>
              <MenuItem value={'10'}>Book 10</MenuItem>
              <MenuItem value={'11'}>Book 11</MenuItem>
              <MenuItem value={'12'}>Book 12</MenuItem>
            </Select>
          </FormControl>
        )}
      </div>
      <h2>{location?.state?.houseName ?? hName}</h2>
      {!Array.isArray(swornMembersList) || swornMembersList.length === 0 ? (
        <div className={styles['members_container--empty']}>
          No Sworn Members Available
        </div>
      ) : (
        <div className={styles.members_container__grid}>
          {renderSwornMembers(
            filterSwornMembers(swornMembersList, currentFilter)
          ).length === 0 ? (
            <div className={styles['members_container--empty']}>
              No Sworn Members Under Current Filter
            </div>
          ) : (
            renderSwornMembers(
              filterSwornMembers(swornMembersList, currentFilter)
            )
          )}
        </div>
      )}
    </section>
  )
}

export default SwornMembers
