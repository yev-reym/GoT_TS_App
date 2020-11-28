import React from 'react'
import styles from './styles.scss'
import Nav from './components/Nav'
import { Map, Book, House } from '../Icons'

type LayoutContainerProps = {
  children: React.ReactNode
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
}): JSX.Element => {
  const tabsToRender = [
    { route: '/books', icon: () => <Book /> },
    { route: '/', icon: () => <Map /> },
    { route: '/houses', icon: () => <House /> },
  ]
  return (
    <div className={styles.layout_container}>
      <Nav tabs={tabsToRender} />
      {children}
    </div>
  )
}

export default LayoutContainer
