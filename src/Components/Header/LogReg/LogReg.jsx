import React from 'react';
import {Link} from "react-router-dom";
import Classes from './LogReg.module.css'

const LogReg = () => {
    return (
        <div >
            <Link  className={Classes.Link} to="/login">Log in</Link>
            <Link  className={Classes.Link} to="/reg">Sign up</Link>
        </div>
    );
};

export default LogReg;