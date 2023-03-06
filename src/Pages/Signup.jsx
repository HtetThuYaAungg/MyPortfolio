import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { ImSpinner2 } from 'react-icons/im'
 
const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [isLoading, setIsLoading] = useState(false);
    // As explained in the Login page.
    const { emailPasswordSignup } = useContext(UserContext);
    const [form, setForm] = useState({
      email: "",
      password: ""
    });
    
    // As explained in the Login page.
    const onFormInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };
    
    
    // As explained in the Login page.
    const redirectNow = () => {
      const redirectTo = location.search.replace("?redirectTo=", "");
      navigate(redirectTo ? redirectTo : "/add");
    }
    
    // As explained in the Login page.
    const onSubmit = async (event) => {

        event.preventDefault();
        setIsLoading(true);
      try {
        const user = await emailPasswordSignup(form.email, form.password);
        if (user) {
          redirectNow();
        }
      } catch (error) {
        if (error.statusCode === 400) {
            alert("Check");
        } else {
            alert(error);
        }
        setIsLoading(false);
      }
    };
 
    return(
//     <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
//    <h1>Signup</h1>
//    <TextField
//      label="Email"
//      type="email"
//      variant="outlined"
//      name="email"
//      value={form.email}
//      onInput={onFormInputChange}
//      style={{ marginBottom: "1rem" }}
//    />
//    <TextField
//      label="Password"
//      type="password"
//      variant="outlined"
//      name="password"
//      value={form.password}
//      onInput={onFormInputChange}
//      style={{ marginBottom: "1rem" }}
//    />
//    <Button variant="contained" color="primary" onClick={onSubmit}>
//      Signup
//    </Button>
//    <p>Have an account already? <Link to="/login">Login</Link></p>
//         </form>
        
<div className='Login'>
<div className="home-hero hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<h1 className="heading-primary">Sign Up For Admin </h1>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
<form className="card-body" >
  <div className="form-control justify-center">
    <label className="label">
      <span className="label-text text-white">E-Mail</span>
    </label>
          {/* <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Admin Name" className="input input-bordered bg-white text-green-900" /> */}
          <input
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={form.email}
            onInput={onFormInputChange}
            
            placeholder="Admin E-mail Address"
            className="input input-bordered bg-white text-green-900"
           />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-white">Password</span>
    </label>
    {/* <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered bg-white text-green-900" /> */}
          <input
             label="Password"
             type="password"
             variant="outlined"
             name="password"
             value={form.password}
            onChange={onFormInputChange}
            placeholder="password" className="input input-bordered bg-white text-green-900"
          />
  </div>
  <div className="form-control mt-6 flex-row">
          <button variant={"contained"} className={`btn btn-primary ${isLoading && "btn-disabled"}  mr-2`} onClick={onSubmit}>
            {isLoading? <ImSpinner2 className='animate-spin'/> : "SignUp"}
          </button>
          <Link to="/">
          <button className="btn btn-primary mr-2">
            Cancel
          </button>
          </Link>
          {/* <button variant="contained" className="btn btn-primary mr-2" onClick={onSubmit}>
        Signup
      </button> */}
     
          
                            </div>
                            <p>Have an account already? <Link to="/login">Login</Link></p>
</form>
</div>
</div>
</div>
</div>
    )
}
 
export default Signup;