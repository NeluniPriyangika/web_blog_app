import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./sidebar.css";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(() =>{
        const getCats = async () =>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img
                className='sidebarImg' 
                src='https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?cs=srgb&dl=pexels-christina-morillo-1181690.jpg&fm=jpg' 
                alt=''
            />
            <p className='sidebarP'>I am a software engineer who creates high-performing applications with organized architecture.
                 I'm also experienced in product design and client relations. And i love to travel and enjoy my self.
            </p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}   
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
