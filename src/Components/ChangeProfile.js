import { useState } from "react";
export const ChangeProfile=(props)=>{
    const [newUsername,setNewUsername]=useState('');
    return (
        <div>
            <input type='text' onChange={(event)=>setNewUsername(event.target.value)}></input>
            <button onClick={()=>props.setUsernName(newUsername)}>ChangeUsername</button>
        </div>
    )
    
}