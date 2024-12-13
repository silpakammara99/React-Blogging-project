import '../sidebar/sidebarstyle.css'

import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
   <div className='sidebarItem'>
    <span className='sidebarTitle'>ABOUT ME</span>
    <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />  
         <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, nihil! Voluptatum doloribus laudantium, nostrum reprehenderit</p>
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

    </div>
  )
}

export default Sidebar
