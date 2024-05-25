import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../../context/auth";
import { useNavigate, useLocation } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.msg);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Login"}>
      <div className="register">
        
        <form onSubmit={handleSubmit} className="login-form">
        <h2 className="text-center">Login</h2>
          <div className="mb-3">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter your Password"
              required
            />
          </div>

          <div className="mb-3">
            <button
              type="button"
              onClick={() => {
                navigate("/forgot-password");
              }}
              className="forgot"
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="mb-3">
            <p className="pt-4 ">
                Don't have an account?
                </p>
            <button
              type="button"
              onClick={() => {
                navigate("/register");
              }}
              className="forgot cr"
            >
              Create_account
            </button>
          </div>
               
          
        </form>
      </div>
    </Layout>
  );
};

export default Login;
