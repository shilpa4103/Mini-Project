import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import StudentForm from './Pages/StudentForm';
import AdminLoginForm from './Pages/AdminLoginForm';
import ComapanyDetailsForm from './Pages/CompanyDetailsForm';

function App() {
  return (
  
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/studentform' element={<StudentForm/>}/>
          <Route path='/adminform' element={<AdminLoginForm/>}/>
          <Route path='/companyform' element={<ComapanyDetailsForm/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
