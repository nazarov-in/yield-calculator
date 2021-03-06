import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from './store'
import App from './components/app/App'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <div className="wrapper">
              <App />
          </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
