import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AnimesList from '../../components/AnimesList'
import * as topAnimesActions from '../../store/TopAnimes/actions'

class TopAnimes extends Component {
  componentDidMount() {
    const { animes, actions } = this.props

    if(!animes.length) {
      actions.fetchTopAnimes()
    }
  }

  render() {
    return (
      <section className="top-animes">
        { <AnimesList {...this.props} /> }
      </section>
    )
  }
}

const mapStateToProps = ({ topAnimes }) => ({ animes: topAnimes })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(topAnimesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TopAnimes)
