import React, {useState} from 'react';
import S from './CreateTicket.module.css'

const CreateTicket = (props) => {
    return (
        <span style={{margin:'5px'}} className={S.CreateTicketContainer}>
            <span style={{fontSize:"12px"}}>Ticket: </span>
            <input onChange={(e)=>{props.setTimeForTask(Number(e.target.value))}}  onKeyPress={(e)=>{
                const keyCode = e.which || e.keyCode;
                const keyValue = String.fromCharCode(keyCode);
                const isValid = /^\d+$/.test(keyValue);
                if (!isValid) {
                    e.preventDefault();
                }}} style={{textAlign:'center',width:'50px'}} value={props.TimeForTask} placeholder={'Time in minutes'}/>
            <span style={{fontSize:"12px"}}> m</span>
        </span>
    );
};

export default CreateTicket;