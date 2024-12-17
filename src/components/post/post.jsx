import './post.css'


import React from 'react'


const Post = () => {
  return (
    <div className='post'>
       <img  className='postImg' src="https://tse1.mm.bing.net/th?id=OIP.pY7LykoNXAtbecPHZeYZwAHaE8&pid=Api&P=0&h=180" alt="" />
        <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className='postTitle'>
           Lorem ipsum dolor sit amet 
        </span>
        <hr/>
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus excepturi accusantium neque. Autem laboriosam quo dolorem molestiae, nemo, distinctio eligendi perspiciatis vel temporibus voluptatem animi quaerat ut quis possimus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo quae nisi blanditiis obcaecati, porro cupiditate beatae explicabo dolorum voluptatem vero? Dolorem earum cumque suscipit veritatis vero id hic praesentium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non molestias minima, error sit a corporis, dolorum quia repellat cupiditate explicabo accusamus voluptatem quibusdam hic odit recusandae modi, tempora pariatur magni.
      
      </p>
    </div>
  )
}

export default Post
