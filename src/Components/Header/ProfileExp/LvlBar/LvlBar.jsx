import React, {useEffect, useState} from 'react';
import Classes from "./LvlBar.module.css";

const LvlBar = ({fillExp, lvl = 0, currentExpCount = 0}) => {

    return (<div>

            <div className={Classes.LvlBox}>
                <div style={{ width: `${fillExp}%` }} className={Classes.fill}>
                    <span className={Classes.Info}>Lvl {lvl}</span>
                </div>
            </div>
            <div>
                {currentExpCount}/3000
            </div>
        </div>

    );
};

export default LvlBar;