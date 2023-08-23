import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";


import './App.css';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionData} from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
  
// })



function App() {
  return (
    <div className="EnglishApp">
      <Routes>
        {/* <Route path="/" element={<MainPage />}/>              */}
        <Route path="/catalog"  element={ <CatalogPage/> }/>        
        <Route path="/registration" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
