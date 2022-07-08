import React from 'react';
import "./post.css";

export default function Post() {
  return (
    <div className='post'>
        <img
            className='postImg'
            src='https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=pexels-pixabay-210186.jpg&fm=jpg'
            alt='' 
        />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>
                Beautiful caputer of nature
            </span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
         Nature, in the broadest sense, is the physical world or universe.
         "Nature" can refer to the phenomena of the physical world, 
         and also to life in general. The study of nature is a large, 
         if not the only, part of science. Although humans are part of nature, 
         human activity is often understood as a separate category from other 
         natural phenomena.
        </p>
    </div>
  )
}
