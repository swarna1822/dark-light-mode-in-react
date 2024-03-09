import React from 'react'
import { useTheme } from '../themeContext';
const Blog = () => {
    const {theme} = useTheme();
    return (
      <div className={`page ${theme}`}>
          <center>
        <h1> Welcome To Blogs Page</h1>
        <p>Read My Latest Blogs</p>
  
          </center>
      </div>
    )
}

export default Blog
