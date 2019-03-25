import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import Header from './components/Header/Header'
import TopAnimes from './pages/TopAnimes'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Route path="/" component={TopAnimes} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
