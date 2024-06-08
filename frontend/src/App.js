import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";

import AdminLoginForm from './Pages/AdminLoginForm';
import McqPage from './Pages/McqPage';
import Signuppage from './Pages/Signuppage';
import Homepage from './Pages/homepage';

function App() {
  return (
  
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/adminform' element={<AdminLoginForm/>}/>
          <Route path='/signup' element={<Signuppage/>}/>
          <Route path='/mcqpage' element={<McqPage/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
