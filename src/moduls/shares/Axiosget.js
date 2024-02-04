import React, { useEffect,useState } from "react"; 
import axios from "axios";

function Axiosget(){
  const[userdata,setdata]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
          console.log(response);
          setdata(response.data)
        
        })
    },[])
  
    return(
        <div>
          {userdata.map((data)=>{
            return(
              <div>
                {data.name}
              </div>
            )
            })}
         
        </div>
    )
}
export default Axiosget;