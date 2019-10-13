import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './app/config/style.css'
// import injectGlobal helper
import { injectGlobal } from 'styled-components'


import Main from './App/Main'

// Global style
injectGlobal`
  html,
  body,
  #app,
  .wrapper {
    
    min-height: 100vh;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
  }
`
const WebFont = require('webfontloader');
WebFont.load({
    google: {
        families: ['Quicksand', 'Ubuntu Mono', 'Open Sans', 'Montserrat', 'Roboto Slab']
    }
});
const wrapper = document.getElementById('app')

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Main />
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))