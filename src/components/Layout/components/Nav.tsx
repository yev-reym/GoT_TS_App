import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles.scss'

type TabType = {
  route: string
  icon: () => JSX.Element
}

type TabListType = TabType[]

interface NavProps {
  tabs: TabListType
}

const Nav: React.FC<NavProps> = ({ tabs }) => {
  const renderNavTabs = (tabList: TabListType) => {
    return tabList.map((tab, i) => {
      return (
        <li key={i}>
          <NavLink
            exact={tab.route === '/' || tab.route === '/books'}
            className={styles.nav__tab}
            activeClassName={styles['nav__tab--active']}
            to={`${tab.route}`}
          >
            {tab.icon()}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <header className={styles.nav}>
      <h2 className={styles.nav__title}>Guide to Game of Thrones</h2>
      <ul className={styles.nav__list}>{renderNavTabs(tabs)}</ul>
    </header>
  )
}

export default Nav
