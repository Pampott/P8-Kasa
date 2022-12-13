import React from 'react'
import itemList from "../../../data/itemList"
import Item from "./Item"
import "./css/ListItems.css"

export default function ListItems() {
  return (
    <section id='list-items'>
        {itemList.map((item, index) => (
            <Item props={item} key={`${item} - ${index}`}/>
        ))}
    </section>
  )
}
