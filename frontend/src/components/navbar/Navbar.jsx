import React, { useEffect, useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";


const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT?</a></p>
      <p><a href="#features">OpenAI</a></p>
      <p><a href="#possibility">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  );
}



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false); // initial value of toggleMenu is false
  const navigate = useNavigate();
  const[loggedIn,setLoggedIn]=useState(false);

  const handleLogout = ()=>{
    sessionStorage.removeItem("current_user");
    navigate("/");
  }

  useEffect(()=>{
    let data = JSON.parse(sessionStorage.getItem("current_user"));
    if(data){
      setLoggedIn(false);
    }else{
      setLoggedIn (true);
    }
  },[])

  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className="gpt3__navbar-links_contanier ">
          <Menu />
        </div>
      </div>
      {!loggedIn && 
      <div className="gpt3__navbar-sign">
      <p onClick={()=>navigate("/login")}></p>
      <button type="button" onClick={handleLogout}>Logout</button>
      </div>}

      {loggedIn && 
      <div className="gpt3__navbar-sign">
      <p onClick={()=>navigate("/login")}>Sign in</p>
      <button type="button" onClick={()=>navigate("/signup")}>Sign Up</button>
      </div>
      }
      
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar