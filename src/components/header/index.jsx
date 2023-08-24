 import React from 'react'
 import { Link } from 'react-router-dom'

 export const Header = ({user}) => {
  return (
    <header>
        {/* <Link to = "/">Home</Link>&nbsp; */}
        <Link to = "/login">Login</Link>&nbsp;
        <Link to = "/register">Register</Link>&nbsp;
        <Link to = "/list">List</Link>&nbsp;
        <Link to = "/attendance">Attendance</Link>
          <Link to = "/faculty">Faculty</Link> 
          <Link to = "/student">Student</Link> 
    </header>
   );
 };

export default Header;