import React, {useEffect, useState} from 'react';
import S from './SetGoal.module.css'
import Popup from "../../../UtilComponents/Popup/Popup";
import PopupAttach from "./PopupAttach/PopupAttach";

import {addTaskAction} from "../../../../store/taskReducer";
import {useDispatch} from "react-redux";
import RepeatTimes from "./RepeatTimes/reapetTimes";
import CreateTicket from "./CreateTicket/CreateTicket";

const SetGoal = () => {
    const [isPopupCalender, setIsPopupCalender] = useState(false)
    const [isPopupAttach, setIsPopupAttach] = useState(false)
    const [isExtended, setIsExtended] = useState(false)
    const [scoreValue,setScoreValue]=useState('')
    const [isButtonAbled,setIsButtonAbled]=useState(false)
    const [taskValue,setTaskValue]=useState('')
    const [repeatTimes,setRepeatTimes]=useState(1)
    const [TimeForTask,setTimeForTask]=useState(60)

const dispatch=useDispatch()

    useEffect(()=>{
        (scoreValue!=''&&taskValue)? setIsButtonAbled(false):setIsButtonAbled(true)
    },[scoreValue,taskValue])

    const setPopupAttach=()=>{
        if(isPopupCalender){
            setIsPopupCalender(false)
        }
        setIsPopupAttach(!isPopupAttach)
    }
    const setPopupCalender=()=>{
        if(isPopupAttach){
            setIsPopupAttach(false)
        }
        setIsPopupCalender(!isPopupCalender)
    }


    return (
        <div className={S.Main}>
            <div onClick={() => {
                setIsExtended(!isExtended)
            }} className={S.TitleAddGoal}>Set new goal
            </div>
            {isExtended && <div className={S.AddGoalBox}>
                <div>
                    <input value={taskValue} onChange={(e)=>{setTaskValue(e.target.value)}} className={S.input} placeholder='Add task'/>
                </div>
                <img onClick={setPopupCalender
                } className={S.img}
                     src={'https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg'}/>

                <button disabled={isButtonAbled} onClick={()=>{dispatch(addTaskAction({taskValue,scoreValue,repeatTimes,TimeForTask}))}} className={S.button}>Add</button>
                <img onClick={setPopupAttach} className={S.imgAttach} src={'https://static.thenounproject.com/png/2401719-200.png'}/>

                <input value={scoreValue} onChange={(e)=>{setScoreValue(e.target.value)}}  onKeyPress={(e)=>{
                        const keyCode = e.which || e.keyCode;
                        const keyValue = String.fromCharCode(keyCode);
                        const isValid = /^\d+$/.test(keyValue);
                        if (!isValid) {
                            e.preventDefault();
                        }
                }} className={S.Score} placeholder={'reward'}/>
                <RepeatTimes repeatTimes={repeatTimes} setRepeatTimes={setRepeatTimes}/>
                <CreateTicket TimeForTask={TimeForTask} setTimeForTask={setTimeForTask}/>
            </div>}
            {isPopupCalender && <Popup/>}
            {isPopupAttach && <PopupAttach/>}

        </div>
    );
}

export default SetGoal;