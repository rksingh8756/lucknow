import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Mynavbar from './moduls/shares/Mynavbar';
import Landingpage from "./moduls/shares/Landingpage";
import Myaxios from './moduls/shares/Myaxios';
import Myservices from './moduls/shares/Myservices';
import Mymobile from './moduls/shares/Mymobile';
import Detailspage from './moduls/shares/Detailspage';
import Mychart from './moduls/shares/Mychart';
import Myform from './moduls/shares/Myform';
import Axiosget from './moduls/shares/Axiosget';
import Axiospost from './moduls/shares/Axiospost'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Mynavbar/>
           <Routes>
              <Route path="/landing" element={<Landingpage/>}/>
              <Route path="/axios" element={<Myaxios/>}/>
              <Route path="/service" element={<Myservices/>}/> 
              <Route path="/service/mobile" element={<Mymobile/>}/> 
              <Route path="/axios/:id" element={<Detailspage/>}/> 
              <Route path="/mychart" element={<Mychart/>}/> 
              <Route path="/myform" element={<Myform/>}/> 
              <Route path="/axiosget" element={<Axiosget/>}/> 
              <Route path="/axiospost" element={<Axiospost/>}/> 


           </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
