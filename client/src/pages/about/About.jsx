import React from 'react';
import "./about.css";

export default function About() {
  return (
    <div className="about">
        <span className='aboutTitle'>ABOUT THE SITE</span>
        <div className="aboutItem">
            <p className='aboutP'>* This is a Blogs site for shre 
                your milions of memories and use as a smart gallery for you....
            </p><br></br>
            <p className='aboutP'>* You can view others blogs and enjoy with them....
            </p><br></br>
            <p className='aboutP'>* Also, you can share your speacial memories, photos and give some text for view others....
            </p><br></br>
            <p className='aboutP'>* Use the 'Millions Gallery Blogs' and enjoy with it....
            </p>
        </div>
        <div className="aboutThankDiv">
            <span className='aboutThank'>Tanks for joing us..!</span>
        </div>
    </div>
  )
}
