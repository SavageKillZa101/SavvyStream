import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FALLBACK = [
  { id: 1, title: 'Sample Show 1', overview: 'Sample overview 1' },
  { id: 2, title: 'Sample Show 2', overview: 'Sample overview 2' }
]

export default function Catalog(){
  const [shows, setShows] = useState(FALLBACK)
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(()=>{
    if(!apiKey) return
    // Basic TMDB example - popular movies
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(r=>r.json())
      .then(data=>{
        if(data && data.results) setShows(data.results.map(s=>({ id: s.id, title: s.title || s.name, overview: s.overview })))
      }).catch(()=>{})
  },[apiKey])

  return (
    <section className="catalog">
      {shows.map(s=> (
        <article className="card" key={s.id}>
          <div className="card-body">
            <h3>{s.title}</h3>
            <p>{s.overview}</p>
            <Link className="play-btn" to={`/player?title=${encodeURIComponent(s.title)}`}>Play</Link>
          </div>
        </article>
      ))}
    </section>
  )
}
