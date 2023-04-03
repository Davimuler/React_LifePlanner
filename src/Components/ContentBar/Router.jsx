import React from 'react';
import {Route, Routes} from "react-router";
import ContentBar from "./ContentBar";
import Login from "./Login/Login";
import Reg from "./Reg/Reg";

const Router = () => {
    return (
        <div >
            <Routes>
                <Route path="/" element={<ContentBar/>}/>
                <Route path="/login/*" element={<Login/>}/>
                <Route path="/reg/*" element={<Reg/>}/>
            </Routes>
        </div>
    );
};

export default Router;