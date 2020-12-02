import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from 'Components/Loader'
import Character from 'Components/Character'
import { fetchRequest as getRequest, formatHouseObject } from 'Utils/'
import ArrowLeftSharpIcon from '@material-ui/icons/ArrowLeftSharp'
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp'
import styles from '../styles.scss'

type LocationState = {
  from: Location
  state: ObjectGeneric<string | string[]>
}

interface HouseI {
  name?: string
  region?: string
  coatOfArms?: string
  words?: string
  titles?: string[]
  seats?: string[]
  currentLord?: string
  heir?: string
  overlord?: string
  founded?: string
  founder?: string
  diedOut?: string
  ancestralWeapons?: string[]
  swornMembers?: string[]
}

interface HouseProps {
  location: LocationState
  match: { params: { houseId: number } }
}
const buildSingleHouseQuery = (houseId: number) => `houses/${houseId}`

const House: React.FC<HouseProps> = (props): JSX.Element => {
  const [houseData, setHouseData] = useState<ObjectGeneric<any>>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const history = useHistory()

  const fetchHouse = async () => {
    setLoading(true)
    try {
      const res: { data: HouseType } = await getRequest(
        buildSingleHouseQuery(props.match.params.houseId)
      )
      if (res.data) {
        const formatData = formatHouseObject(0, res.data)
        setHouseData(formatData)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  console.log('in house', props)
  const cameFromHouses = !!props?.location?.state

  useEffect(() => {
    if (!cameFromHouses) {
      fetchHouse()
    } else {
      setHouseData(props.location.state)
    }
  }, [])

  if (loading && !houseData) {
    return <Loader />
  }

  const {
    name,
    region,
    coatOfArms,
    words,
    titles,
    seats,
    currentLord,
    heir,
    founded,
    founder,
    diedOut,
    ancestralWeapons,
    swornMembers,
  } = houseData

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

  return error ? (
    renderError()
  ) : (
    <>
      <span
        className={styles.backbtn}
        onClick={() =>
          cameFromHouses
            ? history.push('/houses', {
                goToPage: props.location.state.goToPage,
              })
            : history.push('/houses')
        }
      >
        <ArrowLeftSharpIcon />
        Back to Houses
      </span>
      <section className={styles.houseinfo_container}>
        <h3>{name}</h3>

        <div className={styles.houseinfo_container__list}>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Ancestral Weapons:
            </strong>
            <span>{ancestralWeapons}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Coat of Arms:
            </strong>
            <span>{coatOfArms}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Current Lord:
            </strong>
            <span>
              {currentLord !== 'Not Available' ? (
                <Character characterUrl={currentLord} />
              ) : (
                currentLord
              )}
            </span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Died Out:
            </strong>
            <span>{diedOut}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Founded:
            </strong>
            <span>{founded}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Founder:
            </strong>
            <span>
              {founder !== 'Not Available' ? (
                <Character characterUrl={founder} />
              ) : (
                founder
              )}
            </span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Heir:
            </strong>
            <span>
              {' '}
              {heir !== 'Not Available' ? (
                <Character characterUrl={heir} />
              ) : (
                heir
              )}
            </span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Region:
            </strong>
            <span>{region}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Seats:
            </strong>
            <span>{seats}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Titles:
            </strong>
            <span>{titles}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Words:
            </strong>
            <span>{words}</span>
          </div>
          <div className={styles.houseinfo_container__list__field}>
            <strong className={styles.houseinfo_container__list__field__title}>
              Sworn Members:
            </strong>
            <span
              className={styles.members}
              onClick={() =>
                history.push(`/houses/${props.match.params.houseId}/members`, {
                  swornMembers,
                  houseName: name,
                })
              }
            >
              Sworn Members
              <DoubleArrowSharpIcon style={{ color: '#e3b130' }} />
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default House
