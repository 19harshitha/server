import React from 'react';
import './Nav.css';
import avatar from '../../assets/avatar.png';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate =useNavigate()
  return (
    <div className='browse-nav'>
<p className="logo">super app</p>

    <div className="avatar" onClick={()=>navigate("/home")} style={{curs
    :"pointer"}}>
        <img src={avatar} alt="avatar" width={50} height={50} />
    </div>

    </div>
  )
}

export default Nav