import React from 'react';
import "./about.css";

export default function About() {
  return (
    <div className="about">
        <div className="aboutItem">
            <span className='aboutTitle'>ABOUT ME</span>
            <img
                className='aboutImg' 
                src='https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?cs=srgb&dl=pexels-christina-morillo-1181690.jpg&fm=jpg' 
                alt=''
            />
            <p className='aboutP'>I am a software engineer who creates high-performing applications with organized architecture.
                 I'm also experienced in product design and client relations. And i love to travel and enjoy my self.
            </p>
        </div>
        <div className="aboutItem">
            <span className='aboutTitle'>CATEGORIES</span>
            <ul>
                <li className="aboutListItem">Life</li>
                <li className="aboutListItem">Music</li>
                <li className="aboutListItem">Style</li>
                <li className="aboutListItem">Sport</li>
                <li className="aboutListItem">Tech</li>
                <li className="aboutListItem">Cinema</li>
            </ul>
        </div>
        <div className='aboutItem'>
            <span className='aboutTitle'>FOLLOW US</span>
            <div className="aboutSocial">
                <i className="aboutIcon fa-brands fa-facebook-square"></i>
                <i className="aboutIcon fa-brands fa-twitter-square"></i>
                <i className="aboutIcon fa-brands fa-pinterest-square"></i>
                <i className="aboutIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
