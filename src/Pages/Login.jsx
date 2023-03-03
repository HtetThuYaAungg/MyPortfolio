import axios from 'axios';
import React, { useState } from 'react'
import {ImSpinner2} from 'react-icons/im'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    await apiLogin();
  }

  const apiLogin = async () => {
    const { data } = await axios.post('https://dummyjson.com/auth/login', { username, password });
    setIsLoading(false);
    const userData = {
      name: `${data?.firstName} ${data?.lastName}`,
      eamil: data?.email,
      token: data.token
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);
    navigate('/add');
  }

  return (
    <div className='Login'>
      <div className="home-hero hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
      <h1 className="heading-primary">Login For Admin </h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <form className="card-body" onSubmit={loginHandler} >
        <div className="form-control justify-center">
          <label className="label">
            <span className="label-text text-white">Admin Name</span>
          </label>
          <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Admin Name" className="input input-bordered bg-white text-green-900" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered bg-white text-green-900" />
          
        </div>
        <div className="form-control mt-6 ">
                <button className={`btn btn-primary ${isLoading && "btn-disabled"}`} type='submit'>
                  {isLoading? <ImSpinner2 className='animate-spin'/> : "Login"}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
