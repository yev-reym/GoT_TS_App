import React from 'react'
import styles from './styles.scss'

const LandingMap: React.FC = (): JSX.Element => {
  return (
    <main className={styles.content_container}>
      <p>
        Welcome to the Game Of Thrones Guide for the renowned book series. The
        series of epic fantasy novels is written by George R.R. Martin, Hailed
        by Time Magazine as the ‘American Tolkien’, Martin has created what can
        only be described as one of the best fantasy book series of this day and
        age. So intriguing was the book series, HBO decided to release one of
        the most viewed television shows to-date, “Game of Thrones”, where
        Martin’s saga tells the story of multiple characters in the fictional
        lands of Westeros and Essos. This guide will provide you with the
        necessary information the books, as well as the fictional houses and
        characters that enchant the pages of these epic novels.
      </p>
      <img
        className={styles.map_img}
        src="../assets/images/gotmap.jpg"
        alt="continental-map"
      />
    </main>
  )
}

export default LandingMap
