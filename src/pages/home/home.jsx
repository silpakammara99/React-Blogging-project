import Header from '../../headers/header'
import Posts from '../../posts/posts'
import Sidebar from '../../sidebar/sidebar'
import './homestyle.css'


import React from 'react'

const Home = () => {
  return (
    <>
        <Header/>
    <div className='home'>
        
       <Posts/>
       <Sidebar/>
      
    </div>
    </>

  )
}

export default Home
