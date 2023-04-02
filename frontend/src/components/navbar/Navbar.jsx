import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/logo1.png";
import { Link } from "@mui/material";
import AgricultureIcon from '@mui/icons-material/Agriculture';

const Menu = () => {
  // console.log(window.location.pathname)
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">Equipments</a>
      </p>
      <p>
        <a href="#features">Government Schemes</a>
      </p>
      <p>
        <a href="#possibility">Case Studies</a>
      </p>
      {/* <p>
        <a href="#blog">Library</a>
      </p> */}
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // initial value of toggleMenu is false

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img style={{width:'100px'}} src={logo} alt="logo"></img> */}
          <AgricultureIcon color='#379237' sx={{height:'60px',width:'60px',color:'#379237'}}/>
        </div>
        <div className="gpt3__navbar-links_contanier ">
          <Menu />
        </div>
      </div>
      {window.location.pathname == "/products/" ? (
        <div className="gpt3__navbar-sign">
          <button type="button">Log Out</button>
        </div>
      ) : (
        <div className="gpt3__navbar-sign">
          <Link href="/" variant="body2">
            <p style={{ textDecoration: "none" }}>{"Sign in"}</p>
          </Link>
          <Link href="/signup" variant="body2">
            <button type="button">Sign Up</button>
          </Link>
        </div>
      )}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <Link href="/" variant="body2">
                {"Sign in"}
              </Link>
              <a href="/signup">
                <button type="button">Sign up</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
