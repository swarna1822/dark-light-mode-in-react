import React from 'react'
import { useTheme } from '../themeContext'

const Home = () => {
    const {theme} = useTheme();
  return (
    <div className={`page ${theme}`}>
        <center>
      <h1> Welcome To Home Page</h1>

        </center>
    </div>
  )
}

export default Home
