// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Loader from 'Components/Loader'
import {
  fetchRequest as getRequest,
  formatCharacterBooks,
  checkEmptyFieldValues,
} from 'Utils/'
import Modal from 'react-modal'
import { useInfoToggle } from '../../hooks'
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp'
import styles from './styles.scss'

interface CharacterProps {
  characterUrl: string | undefined
  shouldRenderModal?: boolean
  suppliedCharacterData?: boolean | Character
}

interface Character {
  name?: string
  gender?: string
  culture?: string
  born?: string
  died?: string
  titles?: string[]
  aliases?: string[]
  father?: string
  mother?: string
  spouse?: string
  books?: string[]
  tvSeries?: string[]
  playedBy?: string[]
}

const buildCharacterQuery = (characterUrl: string) =>
  characterUrl.replace(`${process.env.API_REQUEST_DOMAIN}`, '')

const Character: React.FC<CharacterProps> = ({
  characterUrl = '',
  shouldRenderModal = true,
  suppliedCharacterData = false,
}): JSX.Element => {
  shouldRenderModal && Modal.setAppElement('#root')

  const [characterData, setCharacterData] = useState<Character>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [toggleState, { toggleTo }] = useInfoToggle()

  const fetchCharacter = async () => {
    setLoading(true)
    try {
      const res: { data: ObjectGeneric<string | string[]> } = await getRequest(
        buildCharacterQuery(characterUrl)
      )
      if (res.data) {
        setCharacterData(res.data)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    if (
      Object.keys(characterData).length === 0 &&
      characterUrl &&
      !suppliedCharacterData
    ) {
      fetchCharacter()
    } else {
      setCharacterData(suppliedCharacterData)
    }
  }, [characterUrl])

  if (loading && !characterData) {
    return <Loader />
  }

  const {
    name,
    gender,
    culture,
    born,
    died,
    titles,
    aliases,
    father,
    mother,
    spouse,
    books,
    tvSeries,
    playedBy,
  } = characterData

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
      <section className={styles.charinfo_container}>
        <h3>{name}</h3>

        {shouldRenderModal && (
          <VisibilitySharpIcon
            style={{ cursor: 'pointer' }}
            onClick={() => toggleTo(true)}
          />
        )}
        {shouldRenderModal && (
          <Modal
            isOpen={toggleState}
            onRequestClose={() => toggleTo(false)}
            contentLabel="Character Modal"
            className={styles.modal__custom}
            overlayClassName={styles.overlay_custom}
          >
            <h3>{name}</h3>

            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Gender:
              </strong>
              <span>{checkEmptyFieldValues(gender)}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Culture:
              </strong>
              <span>{checkEmptyFieldValues(culture)}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Born:
              </strong>
              <span>{checkEmptyFieldValues(born)}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Died:
              </strong>
              <span>{checkEmptyFieldValues(died)}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Titles:
              </strong>
              <span>{checkEmptyFieldValues(titles) !== 'Not Available'}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Aliases:
              </strong>
              <span>{checkEmptyFieldValues(aliases)}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Father:
              </strong>
              <span>
                {checkEmptyFieldValues(father) !== 'Not Available' ? (
                  <Character characterUrl={father} shouldRenderModal={false} />
                ) : (
                  checkEmptyFieldValues(father)
                )}
              </span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Mother:
              </strong>
              <span>
                {checkEmptyFieldValues(mother) !== 'Not Available' ? (
                  <Character characterUrl={mother} shouldRenderModal={false} />
                ) : (
                  checkEmptyFieldValues(mother)
                )}
              </span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Spouse:
              </strong>
              <span>
                {checkEmptyFieldValues(spouse) !== 'Not Available' ? (
                  <Character characterUrl={spouse} shouldRenderModal={false} />
                ) : (
                  checkEmptyFieldValues(spouse)
                )}
              </span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Books:
              </strong>
              <span>{formatCharacterBooks(books)}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                T.V. Appearances:
              </strong>
              <span>{checkEmptyFieldValues(tvSeries)}</span>
            </div>
            <div className={styles.charinfo_container__list__field}>
              <strong className={styles.charinfo_container__list__field__title}>
                Played By:
              </strong>
              <span>{checkEmptyFieldValues(playedBy)}</span>
            </div>
          </Modal>
        )}
      </section>
    </>
  )
}

export default Character
