import React, { useState } from "react";
import Wrapper from "./style";
import { Link } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("https://server-api1-li2k.onrender.com/api/user/login",{
     email,password,
    }).then((res) => {console.log(res.data);}).catch((err) => {console.log(err.message);}).finally(() => {
      console.log("heeeyyy login here done");
    });
  };

  return (
    <Wrapper>
      <div class="bg-img">
        <form>
          <div class="container">
            <h1>Login</h1>
            <hr />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            
            <input
              type="password"
              placeholder="Password"
              name="psw"
              id="psw"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>
              By creating an account you agree to our
              <Link to = "/register">  Terms & Privacy</Link>
            </p>
            <button type="submit" class="btn" onClick={handleLogin}>
              Login
            </button>
            <div class="containerSignin">
              <p>
                Need an account?<Link to = "/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
