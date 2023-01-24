import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const NavBar = (props) => {
    return (
        <nav className= {style.nav}>
            <div className= {style.item}>
                <NavLink to="/" className = { navData => navData.isActive ? style.active : style.item } >Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to= "/Dialogs"className = { navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News" className = { navData => navData.isActive ? style.active : style.item }>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Music" className = { navData => navData.isActive ? style.active : style.item }>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? style.active : style.item }>Settings</NavLink>
            </div>
            <div>
                <Friends friend={props.friend}/>
            </div>
        </nav>
    )
}

export default NavBar;