import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import NavBar from './components/NavBar'
import { ThemeProvider } from './themeContext'

const App = () => {
  return (
    <ThemeProvider>

    <BrowserRouter>
    <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
