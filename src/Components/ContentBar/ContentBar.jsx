import React from 'react';
import MainBar from "./MainBar/MainBar";
import NavBar from "./NavBar/NavBar";
import Classes from './ContentBar.module.css'
import {Route,Routes} from "react-router";

const ContentBar = () => {
    return (
        <div className={Classes.ContentWrapper}>
                    <MainBar className={Classes.MainBar}/>
                    <NavBar className={Classes.NavBar}/>
        </div>
    );
};

export default ContentBar;