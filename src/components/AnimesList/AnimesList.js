import React from 'react'

const AnimesList = ({ animes }) => (
  <ul>
    {
      animes.map(anime => (
        <li key={anime.mal_id}>
          {anime.title}
        </li>
      ))
    }
  </ul>
)

export default AnimesList
