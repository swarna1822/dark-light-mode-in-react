import React from 'react'
import { useTheme } from '../themeContext';
const About = () => {
    const {theme} = useTheme();
    return (
      <div className={`page ${theme}`}>
          <center>
        <h1> Welcome To About Page</h1>
  
          </center>
      </div>
    )
}

export default About
