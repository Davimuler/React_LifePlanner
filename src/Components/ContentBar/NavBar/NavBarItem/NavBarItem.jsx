import React from 'react';
import S from "../NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBarItem = (props) => {
    return (

            <NavLink className={S.NavBarItem} to={props.destination}>
                 <img className={S.Img} src={props.img}/>
                <div>{props.title}</div>
            </NavLink>

    );
};

export default NavBarItem;