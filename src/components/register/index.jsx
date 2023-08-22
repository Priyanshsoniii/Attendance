import React, { useState } from 'react';
import Wrapper from './style';
import axios from 'axios';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("https://server-api1-li2k.onrender.com/api/user/add",{
     email,password,confirmPassword,contact,role,
    }).then((res) => {console.log(res.data);}).catch((err) => {console.log(err.message);}).finally(() => {
      console.log("heeeyyy register here done");
    });
  };

  return (
    <Wrapper>
      <h2>Register</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </Wrapper>
  );
}

export default RegisterPage;
