import React from 'react'
import AddButton from '../AddButton/AddButton'
import style from './Track.module.css'

export default function Track(props) {
  return (
    <div className={style.liStyle}>
      Song:{props.result.title}-
      Artist:{props.result.artist}-
      Album:{props.result.album}
      <AddButton addSong={props.addSong} result={props.result} /></div>
  )
}