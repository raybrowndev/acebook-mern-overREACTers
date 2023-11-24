import React from 'react';
import { useNavigate } from 'react-router-dom';
import Acebook from '../auth/static/Acebook.png';
import './NavBar.css'
import Find from '../find/Find';

const NavBar = (props) => {
  const navigate = useNavigate();

  const urlTo = (path) => {
    navigate(path);
  };

  // const userId = window.localStorage.getItem('userId');


  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  return(
    <div className='navbarcontainer'>
    <nav data-cy="navbar">
      <div className='logo-container'>
      <img  className='logo' src={Acebook} alt="logo" />
      </div>
      <div className='searchbar'><Find posts={ props.posts } navigate={props.navigate} /></div>
      <div className='buttoncontainer'><button className='navbutton' data-cy="home-button" onClick={() => urlTo('/posts')}>Home</button>
      <button className='navbutton' data-cy="profile-button" onClick={() => urlTo('/profile')}>Profile</button>
      <button className='navbutton' data-cy="logout-button" onClick={logout}>Logout</button>
    </div>
    </nav></div>
  )
}

export default NavBar;
