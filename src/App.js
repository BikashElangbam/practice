import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './E-Commerce/Login';
import ProductLists from './E-Commerce/ProductLists';
import Registration from './E-Commerce/Registration';
import Layout from './E-Commerce/Layout';
import Home from './E-Commerce/Home';


function App() {
  return (
    <>
    {/* <FormValidation/> */}
       
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/login" element={<Login/>}/> 
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/productlist" element={<ProductLists/>}/>
          </Route>
        </Routes>
      
    </>

  );
}

export default App;