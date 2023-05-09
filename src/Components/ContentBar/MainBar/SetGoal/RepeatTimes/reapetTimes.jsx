import React, {useEffect, useState} from 'react';
import S from './repeatTimes.module.css'

const RepeatTimes = (props) => {
    useEffect(()=>{
        (props.repeatTimes===0)? props.setRepeatTimes(1):<></>
    },[props.repeatTimes])
    return (
        <span className={S.repeatTimesContainer}>
            Repeats:
                 <span onClick={()=>{props.setRepeatTimes(props.repeatTimes-1)}} style={{  marginLeft: '10px' }}   className={S.counter}>– </span>
            <input  value={props.repeatTimes} className={S.inputTimes}  onChange={(e)=>{props.setRepeatTimes(Number(e.target.value))}}
                    onKeyPress={(e)=>{
                        const keyCode = e.which || e.keyCode;
                        const keyValue = String.fromCharCode(keyCode);
                        const isValid = /^\d+$/.test(keyValue);
                        if (!isValid) {
                            e.preventDefault();
                        }}}
            />
            <span onClick={()=>{props.setRepeatTimes(props.repeatTimes+1)}} className={S.counter}> +</span>
        </span>

    );
};

export default RepeatTimes;