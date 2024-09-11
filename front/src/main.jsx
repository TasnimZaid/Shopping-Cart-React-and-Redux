import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from '@reduxjs/toolkit' ;
import {Provider} from "react-redux" ;
import productReducer from './reducer/Users.jsx' ;
import cartReducer from './reducer/cartSlice.jsx'



const store = configureStore({
  reducer : {
    products : productReducer ,
    cart: cartReducer,

  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
