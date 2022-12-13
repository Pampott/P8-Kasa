import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
