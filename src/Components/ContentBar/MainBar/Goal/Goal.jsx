import React, {useState} from 'react';
import Classes from "./Goal.module.css";

const Goal = () => {
    const [achived,setAchived]=useState(false)
    return (
            <div style={{
                backgroundColor: achived && 'teal',
            }} className={Classes.Goal}>
                <div  className={Classes.GoalInfo}>Some goal name</div>
                <div onClick={()=>setAchived(true)}  className={Classes.CheckBox}> {achived&&<img className={Classes.CheckMark} src={'https://www.citypng.com/public/uploads/preview/-316225804095zek9ufozk.png'}/>}</div>
            </div>
    );
};

export default Goal;