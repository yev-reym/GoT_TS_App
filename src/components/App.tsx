import React, { lazy, Suspense } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Loader from 'Components/Loader'
import Layout from 'Components/Layout'
import { BooksProviderWrapper } from '../contexts/BookContext'

// Lazy Loading
const Landing = lazy(() => import('./Landing'))
const Books = lazy(() => import('./BookList'))

export interface AppProps {}

const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <BooksProviderWrapper>
          <Layout>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/books" component={Books} />
              {/* <Route exact path="/houses" component={Houses} />
        <Route path="/houses/:houseId" component={House} /> */}
            </Switch>
          </Layout>
        </BooksProviderWrapper>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
