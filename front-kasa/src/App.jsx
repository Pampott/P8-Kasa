import './App.css'
import { itemList } from './data/itemList'


function App() {

  return  <>
    <ul>{itemList.map((item, index) => (
      <li key={`${item} - ${index}`}>{item.title}</li>
    ))}</ul>
  </>
}

export default App
