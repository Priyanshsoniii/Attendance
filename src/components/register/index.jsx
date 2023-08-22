import React, { useState } from 'react';
import Wrapper from './style';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  // const [role, setRole] = useState('');

  const handleRegister = () => {
    
  };

  return (
    <Wrapper>
      
        <div class = "register">
          <form>
          <h2>Register</h2>
          <input
            type="email"
            value={email}
            placeholder ="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        
        <div>
          <input
            type="password"
            value={password}
            placeholder ="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={confirmPassword}
            placeholder ="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="contact"
            value={contact}
            placeholder ="Contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
            <select name="" id="userRole">
                <option disabled selected>--ROLE--</option>
                <option>Student</option>
                <option>Faculty</option>
            </select>
            {/* onChange={(e) => setRole(e.target.value)} */}
        </div>
        <button type="submit" onClick={handleRegister}>Register</button>
       </form>
       </div>
    </Wrapper>
  );
}

export default RegisterPage;
