import './sidebarstyle.css'

import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
   <div className='sidebarItem'>
    <span className='sidebarTitle'>ABOUT ME</span>
    <img
          src="https://c8.alamy.com/comp/TA8B8F/pretty-girl-holding-flowers-with-green-eucalyptus-leaves-on-white-TA8B8F.jpg"
          style={{height:'300px', width:'300px'}}
          alt=""
        />
         <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Nemo, nihil! Voluptatum doloribus laudantium, nostrum reprehenderit
    </p>
   </div>
      
<div className='sidebarItem'>
    <span className='sidebarTitle'>CATEGORIES</span>
   <ul className='sidebarList'>
   <li className="sidebarListItem">Life</li>
   <li className="sidebarListItem">Music</li>
   <li className="sidebarListItem">Sport</li>
   <li className="sidebarListItem">Style</li>
   <li className="sidebarListItem">Tech</li>
   <li className="sidebarListItem">Cinema</li>
   </ul>

</div>
<div className="sidebarItem">
<span className='sidebarTitle'>FOLLOW US</span>
<div className='sidebarSocial'></div>
<i className="sideIcon fa-brands fa-square-facebook"></i>
<i className="sideIcon fa-brands fa-square-twitter" style={{color: '#74C0FC'}}></i>
<i className="sideIcon fa-brands fa-pinterest"></i>
<i className="sideIcon fa-brands fa-square-instagram"></i>

</div>


    </div>
  )
}

export default Sidebar
