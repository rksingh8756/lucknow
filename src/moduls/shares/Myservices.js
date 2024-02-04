import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";

function Myservices(){
      return(
      <div className='container mt-4'>
          <div className='row'>
                <div className='col-md-2'>
                  <section className='border'>
                    <Sidebar></Sidebar>
                  </section>
                 </div> 
                 <div className='col-md-10'>
                  <section className='border'>
                     <Outlet></Outlet>
                  </section>
                 </div>
          </div>
      </div>
      )
}
export default Myservices;