import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from "./components/login"
import { RegisterPage }  from "./components/register"
import Header from './components/header';

export const App = () => {
  return (
    <BrowserRouter>
      { <Header /> }
      <Routes>
          <Route path="/" element = {<LoginPage />} />
          <Route path="/register" element = {<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
