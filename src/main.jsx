import React from 'react'
import ReactDOM from 'react-dom/client'
//Importacion de Redux
import { Provider } from 'react-redux'
import store from './store'
//Importacion de Router
import { HashRouter } from 'react-router-dom'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
      
    </Provider>
    
  </React.StrictMode>
)
