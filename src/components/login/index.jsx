import React, { useState } from "react";
import Wrapper from "./style";
import { Link } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  // const [email, setEmail] = useState("");
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("https://server-api1-li2k.onrender.com/api/user/login", {
      contact, password,
    }).then((res) => { console.log(res.data); }).catch((err) => { console.log(err.message); }).finally(() => {
      console.log("heeeyyy login here done");
    });
  };

  return (
    <Wrapper>
        <div className="bg-img">
          <form>
            <div className="container">
              <h1>Login</h1>
              <input
                type="text"
                placeholder="Email"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                By creating an account you agree to our
                <Link to="/register">  Terms & Privacy</Link>
              </p>
              <button type="submit" className="btn" onClick={handleLogin}>
                Login
              </button>
              <div className="containerSignin">
                <p>
                  Need an account?<Link to="/register">Sign Up</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
    </Wrapper>
  );
};

export default LoginPage;
