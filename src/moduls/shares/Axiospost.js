import axios from "axios";
import React,{useState} from "react"


function Axiospost(){
    const data={fname:"", lname:""};
    const[inputdata,setinputdata]=useState(data);

    const handleData =(e) =>{
        setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
  const handleSubmit=(e) =>{
    e.preventDefault();
     axios.post("https://jsonplaceholder.typicode.com/users", inputdata).then((response)=>{
       console.log(response);
     })
     }
     const handleUpdate =(e)=>{
      e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputdata).then((response)=>{
         console.log(response);
        })
     }

     const handleDelete=(e)=>{
      e.preventDefault();
      axios.delete("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
       console.log(response)
      })
     }
  return(
       <>
       <lable>First Name</lable> <input type="text" name="fname" value={inputdata.fname} onChange={handleData}/><br/><br/>
       <lable>Last Name</lable> <input type="text" name="lname" value={inputdata.lname} onChange={handleData}/><br/><br/>
       <button onClick={handleSubmit} >submit</button><br/><br/>
       <button onClick={handleUpdate} >update</button><br/><br/>
       <button onClick={handleDelete} >Delete</button><br/><br/>
       

       </>  
  );
}
export default Axiospost;