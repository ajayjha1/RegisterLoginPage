import React from 'react'
import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <LoginPage onLogin = {() => setIsLoggedIn(true)} /> }/>
        <Route path='/register' element={ <RegisterPage/> }/>
        <Route path='/' element={ isLoggedIn ? <HomePage/> : <RegisterPage/> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
