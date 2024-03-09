import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useTheme } from '../themeContext'

const NavBar = () => {
const {theme,toggleTheme} = useTheme();
const toggleMode = ()=>{
    toggleTheme();
}
  return (
    
      <nav className={`nav-bar ${theme}`}>
        <div>

      <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Blog'>Blog</Link>
        </div>
        <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleMode}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
      </nav>
    
  )
}

export default NavBar
