import React from 'react'
import "./css/Item.css"

export default function Item({ props }) {
  return (
    <a className="item" href="#">
        <h2>{props.title}</h2>
        <img src={props.cover} alt={props.title} />
    </a>
  )
}
