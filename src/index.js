import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import configStore from './store'
import Board from './components/Board'
import './styles/main.scss'

const store = configStore()
const rootRenderDomNode = document.getElementById('app')

const render = Component => ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  rootRenderDomNode
)

render()
