import { render } from 'react-dom'
import App from './App'
import React from 'react'

interface RootProps {}

const Root = (props: RootProps): JSX.Element => {
  return <App {...props} />
}

render(<Root />, document.getElementById('root'))
