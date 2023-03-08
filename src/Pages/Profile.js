import { ChangeProfile } from "../Components/ChangeProfile"
export const Profile =(props)=>{
    return (
        <div>
           
           <h1> PROFILE, user is: {props.userName}</h1>
            <ChangeProfile  setUsernName={props.setUsernName}/>

        </div>
    )
}