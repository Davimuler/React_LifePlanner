
const defaultState={
tasks:[]
}
 const taskReducer=(state=defaultState,action)=>{
    switch (action.type){
        case "ADD_TASK":{
return {...state,tasks:[...state.tasks,action.data]}
        }
        default:
            return state;
    }
}
export const addTaskAction=(data)=>({type:'ADD_TASK',data})

export default taskReducer;