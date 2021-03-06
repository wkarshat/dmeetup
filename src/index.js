import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-render'
import { PersistGate } from 'redux-persist/es/integration/react'
import { getPersistor } from '@rematch/persist'
import { ThemeProvider } from 'styled-components'
import 'react-placeholder/lib/reactPlaceholder.css'

import { getEnv } from './core/utils'
import setupStore from './core/store/setup'
import { theme } from './core/constants'
import App from './App'
import * as serviceWorker from './serviceWorker'

const { store } = setupStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()

// Expose some variables for debugging.
window.env = {
  STAGE: getEnv('STAGE')
}
