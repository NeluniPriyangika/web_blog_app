import React from 'react';
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
        <span className='contactTitle'>Email</span>
        <div className="contactItem">
            <ul className='contactList'>
              <li className="contactListItem">millionsgalleryblogs@gmail.com</li>
            </ul>
        </div>
        <span className='contactTitle'>FOLLOW US ON..</span>
            <div className="contactSocial">
                <i className="contactIcon fa-brands fa-facebook-square"></i>
                <i className="contactIcon fa-brands fa-twitter-square"></i>
                <i className="contactIcon fa-brands fa-pinterest-square"></i>
                <i className="contactIcon fa-brands fa-instagram-square"></i>
            </div>
        
    </div>
   
  )
}
