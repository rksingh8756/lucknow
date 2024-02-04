import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link}  from "react-router-dom";


function Myaxios() {
    const [mydata, setdata] = useState([])
    const Myapi = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((e) => {
            setdata(e.data)
        })
    }

    useEffect(() => {
        Myapi();
    })
    return (
             
        <>
           <div className="container">
             <div className="row">
            {mydata.map((p) => {
                return (
                    <div className="col-md-4" key={p.id}>
                        <div className="card" >
                           <div className="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">{p.body}</p>
                                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                                    <Link to={`${p.id}`} class="btn btn-danger ms-2">View</Link>
                                </div>
                         </div>
                    </div>
                    
                )
            })}
           
            </div>
        </div>
        </>
       
    )
}
export default Myaxios;