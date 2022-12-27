import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './utils/firebase'
import './scss/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
