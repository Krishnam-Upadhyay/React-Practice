
import Axios from 'axios';
import {useQuery}  from "react-query";;
export const Home =()=>{
    const {data,isLoading,error,refetch}=useQuery(["cat"],()=>{
        return Axios.get('https://catfact.ninja/fact').then((res)=>res.data)
    })
   if(isLoading){
    return <h1>Loading Data Please Wait .....</h1>
   }
   if(error){
    return <h1>Sorry there was an error</h1>
   }
    return (<div>
         <h1>This isy home page <p>{data?.fact}</p>
         
         </h1>
         <button onClick={refetch}>Update Data</button>
         
         

    </div>);
}