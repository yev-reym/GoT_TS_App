import React from 'react'
import { TailSpin } from '../Icons'
import styles from './styles.scss'

interface LoaderProps {
  customClassName?: string
}

export default ({ customClassName = '' }: LoaderProps): JSX.Element => {
  return (
    <section className={`${styles.svg} ${customClassName}`}>
      <TailSpin />
    </section>
  )
}
