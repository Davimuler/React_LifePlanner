import React, { useEffect, useState } from 'react';
import Classes from '../Goal.module.css';

const Ticket = (props) => {
    const [count, setCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);


    useEffect(() => {
        let intervalId;
        if (isStarted) {
            intervalId = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 60000);
        }
        return () => clearInterval(intervalId);
    }, [isStarted]);
useEffect(()=>{
    if(props.achieved){
        setIsStarted(false)
    }
},[props.achieved])

    return (
        <span style={count > props.TimeForTask ? { color: 'red' } : null} className={Classes.TicketBox}>
    {!props.achieved&& <button style={isStarted? {color:'green'}:{color:'red'}} disabled={props.achieved} onClick={() => {
        setIsStarted(!isStarted)}
    }>{isStarted ? 'Pause' : 'Start'} </button>}
      <span>
        {' '}
          {count} of {props.TimeForTask}m
      </span>

      <div style={{color:"#E9967A"}}>
          Repeats: {props.currentRepeats} of {props.repeatTimes}</div>
    </span>
    );
};

export default Ticket;
