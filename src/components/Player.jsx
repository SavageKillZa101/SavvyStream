import React from 'react'
import { useLocation } from 'react-router-dom'

// Provided embed URL (user-specified)
const DEFAULT_EMBED = "https://www.vidking.net/embed/tv/918/2/4?color=e50914&autoPlay=true&nextEpisode=true&episodeSelector=true"

export default function Player(){
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const title = params.get('title') || 'Now Playing'
  const src = params.get('embed') || DEFAULT_EMBED

  return (
    <div className="player-page">
      <h2>{title}</h2>
      <div className="player-wrap">
        <iframe src={src} width="100%" height="600" frameBorder="0" allowFullScreen title={title}></iframe>
      </div>
    </div>
  )
}
