import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import TopAnimes from './pages/TopAnimes'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={TopAnimes} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
