import React from 'react';
import Goal from "./Goal/Goal";
import SetGoal from "./SetGoal/SetGoal";
import {Route, Routes} from "react-router";
import ContentBar from "../ContentBar";
import Login from "../Login/Login";
import Reg from "../Reg/Reg";
import Sport from "./Sport/Sport";
import Character from "./Character/Character";
import Health from "./Health/Health";
import Work from "./Work/Work";
import Buying from "./Buying/Buying";
import Tasker from "./Tasker/Tasker";

const MainBar = () => {
    return (
        <div>
            <Routes>
                <Route path="/Sport" element={<Sport/>}/>
                <Route path="/Health" element={<Health/>}/>
                <Route path="/Work" element={<Work/>}/>
                <Route path="/Buying" element={<Buying/>}/>
                <Route path="/Character" element={<Character/>}/>
                <Route path="/" element={<Tasker/>}/>
            </Routes>


        </div>
    );
};

export default MainBar;