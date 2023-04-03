import React from 'react';
import ProfileExp from "./ProfileExp/ProfileExp";
import LogReg from "./LogReg/LogReg";
import Classes from './Header.module.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={Classes.headerWrapper}>
            <div className={Classes.MainSectionHeader}>
                <Link to={'/'}>
                    <img className={Classes.MainImg} src={'https://www.iconpacks.net/icons/2/free-home-icon-2502-thumb.png'}/>
                </Link>

                <ProfileExp/>
            </div>

            <div className={Classes.ProfileSection}>
                <LogReg/>
            </div>

        </div>
    );
};

export default Header;