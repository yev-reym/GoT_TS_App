import React, { lazy, Suspense } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Loader from 'Components/Loader'
import Layout from 'Components/Layout'
import { BooksProviderWrapper } from '../contexts/BookContext'
import { HousesProviderWrapper } from '../contexts/HousesContext'

// Lazy Loading
const Landing = lazy(() => import('./Landing'))
const Books = lazy(() => import('./BookList'))
const Houses = lazy(() => import('./HouseList'))
const House = lazy(() => import('./HouseList/components/HouseItem'))
const SwornMembers = lazy(() => import('./Character/components/SwornMembers'))


export interface AppProps {}

const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <HousesProviderWrapper>
          <BooksProviderWrapper>
            <Layout>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/books" component={Books} />
                <Route exact path="/houses" component={Houses} />
                <Route exact path="/houses/:houseId" component={House} />
                <Route exact path="/houses/:houseId/members" component={SwornMembers} />
              </Switch>
            </Layout>
          </BooksProviderWrapper>
        </HousesProviderWrapper>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
