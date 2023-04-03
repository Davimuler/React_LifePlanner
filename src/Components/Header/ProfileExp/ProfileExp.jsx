import React, {useState} from 'react';
import Classes from './ProfileExp.module.css'
import LvlBar from "./LvlBar/LvlBar";

const ProfileExp = (props) => {
    const [v, setV] = useState(10)
    return (
        <div>
            <LvlBar fillExp={v}/>
            <input onChange={(e) => setV(e.target.value)} value={v}/>
        </div>
    );
};

export default ProfileExp;