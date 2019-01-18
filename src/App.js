import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as topAnimesActions from './store/TopAnimes/actions'
import './App.css'


const TopAnimesList = ({ topAnimes }) => (
  <ul>
    {
      topAnimes.map(anime => (
        <li key={anime.mal_id}>
          {anime.title}
        </li>
      ))
    }
  </ul>
)

class App extends Component {

  componentDidMount() {
    console.log('PROPS', this.props)
    const { topAnimes, actions } = this.props

    if(!topAnimes.length) {
      actions.fetchTopAnimes()
    }
  }


  render() {
    return (
      <div className="App">
        { <TopAnimesList {...this.props} /> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topAnimes: state.topAnimes,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(topAnimesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
