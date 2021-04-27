import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { HeaderWrapper, InputWrapper, LogOutButton } from "../style/";

export const Header = () => {
    let navRef = useRef(null);
    let hamRef = useRef(null);
    const toggle = () => {
        if (navRef.current.classList.contains("animation1")) {
            hamRef.current.src = "./icon-hamburger.svg";
            navRef.current.classList.remove("animation1");
            navRef.current.classList.add("animation2");
    
        } else {
            hamRef.current.src = "./icon-close.svg";
            navRef.current.classList.remove("animation2");
            navRef.current.classList.add("animation1");
        }
    }
    return (
        <HeaderWrapper>
           <div style={{ display:"flex", justifyContent:"space-between"}}>
           <img ref={hamRef} onClick={toggle} src="./icon-hamburger.svg" className="ham none" alt="icon-hamburger" />
           <NavLink to="/"><span>Logo</span></NavLink>
           
           <InputWrapper type="search" style={{ width: "300px",color:"white", marginBottom:"0px", border:"none",  backgroundColor: "#121212" }} className="search"  placeholder="Search" />
           <div className="nav" ref={navRef}>
           <NavLink to="/genres" style={{fontSize:"14px", padding:"15px", textDecoration:"none", color:"white" }}><span>Genres</span></NavLink>
           <NavLink to="/artists" style={{fontSize:"14px", padding:"15px", textDecoration:"none", color:"white"  }}><span>Artist</span></NavLink>
           <NavLink to="/profile" style={{fontSize:"14px", padding:"15px", textDecoration:"none", color:"white"  }}><span >Profile</span></NavLink>
           </div>
           <LogOutButton >Logout</LogOutButton>
           </div>
            
        </HeaderWrapper>
    );
}

