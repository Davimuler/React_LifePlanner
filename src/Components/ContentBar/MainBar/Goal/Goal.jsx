import React, {useEffect, useState} from 'react';
import Classes from "./Goal.module.css";
import {useDispatch, useSelector} from "react-redux";
import Ticket from "./Ticket/Ticket";

const Goal = (props) => {
    const [currentRepeats, setCurrentRepeats] = useState(0)
    const [achieved, setAchieved] = useState(false)

    const achieveGoal = () => {
        setAchieved(true);
        setCurrentRepeats(currentRepeats + 1);
    }
    useEffect(()=>{
        if(currentRepeats<props.repeatTimes){
            setTimeout(() => {
                setAchieved(false)
            }, 200);
        }
    },[currentRepeats])

    return (
        <div style={{
            backgroundColor: achieved && 'teal',
        }} className={Classes.Goal}>

            <div className={Classes.GoalInfo}>{props.task}</div>

            <div onClick={achieveGoal} className={Classes.CheckBox}> {achieved && <img className={Classes.CheckMark}
                                                               src={'https://www.citypng.com/public/uploads/preview/-316225804095zek9ufozk.png'}/>}</div>
            <div className={Classes.GoalScore}>Score:{props.reward}</div>
            <Ticket currentRepeats={currentRepeats} repeatTimes={props.repeatTimes} achieved={achieved}
                    repeatTimes={props.repeatTimes} TimeForTask={props.TimeForTask}/>

        </div>
    );
};

export default Goal;