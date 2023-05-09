import React from 'react';
import SetGoal from "../SetGoal/SetGoal";
import Goal from "../Goal/Goal";
import {useSelector} from "react-redux";

const Tasker = () => {
    const tasks=useSelector(state=>state.Task.tasks)
    return (
        <div>
            <SetGoal/>
            {tasks.map(t=><Goal TimeForTask={t.TimeForTask} repeatTimes={t.repeatTimes} task={t.taskValue} reward={t.scoreValue}/>)}

        </div>
    );
};

export default Tasker;