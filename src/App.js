import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './auth/login/LoginPage';
import AdministratorHome from './pages/administrator-home/AdministratorHome';
import EmployeeHome from './pages/employee-home/EmployeeHome';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';

function App() {
  const [role, setRole]=useState("")
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar role={role} setRole={setRole}/>
      <Routes>
        <Route path='/' element={<LoginPage setRole={setRole}/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='admin' element={<AdministratorHome/>}/>
        <Route path='person' element={<EmployeeHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
