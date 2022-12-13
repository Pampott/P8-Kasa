import React, {useState, useEffect} from 'react'
import "./Home.css"
import mobileImage from "../../assets/bg-mobile.jpg"
import DImage from "../../assets/bg-desktop.jpg"
import ListItems from './ListItems/ListItems'

export default function Home() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 376px)").matches)

  useEffect(()=> {
    window
    .matchMedia("(min-width: 376px)")
    .addEventListener('change', e => setMatches(e.matches))
  }, [])
  return (
    <main>
      <section id='intro'>
        <h1>Chez vous, partout et ailleurs</h1>
        {matches && (<img src={DImage} alt="background" />)}
        {!matches && (<img src={mobileImage} alt="background mobile" />)}
      </section>
      <ListItems />
    </main> 
  )
}
