import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from "./components/login"
import { RegisterPage }  from "./components/register"
import Header from './components/header';
import Error from './components/error';
import Attendance from './components/attendance';
import Faculty from './components/faculty';
import Student from './components/student';


export const App = () => {
  return (
    <BrowserRouter> 
      
      { <Header /> }
      <Routes>
        
          <Route path="/login" exact element = { <LoginPage /> } />
          <Route path="/register" exact element = { <RegisterPage /> } />
          <Route path="/attendance" exact element = { <Attendance /> } />
          <Route path="/faculty" exact element = { <Faculty /> } />
          <Route path="/student" exact element = { <Student /> } />

          <Route path = "/*" element = { <Error /> } />
           
      </Routes>
    </BrowserRouter>
  )
}

export default App;
