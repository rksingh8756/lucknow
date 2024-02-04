import React,{useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';


function Detailspage(){
        const[a,b]=useState({});

        let {id}=useParams();
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((e)=>{
          b(e.data);
        })
    return(
             <div className="container">
                    <div className="row">
                         <div className='col-12'>
                                <h2>Heading {a.id}</h2>
                         </div>
                         <div className="col-md-4">
                              <section className="border mt-3">
                               <h2>Images...</h2>
                              </section>
                         </div>
                         <div className="col-md-8">
                              <section className="border mt-3">
                               <h2>{a.title}</h2>
                               <p>{a.body}</p>
                              </section>
                         </div>
                    </div>
             </div>
    )
}
export default Detailspage;