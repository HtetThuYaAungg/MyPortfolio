
import { ImSpinner2 } from 'react-icons/im'
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const Login = () => {

  //MongoDB
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/add");
  }

  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        // Redirecting them once fetched.
        redirectNow();
      }
    }
  }

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      
      const user = await emailPasswordLogin(form.email, form.password);

      if (user) {
        redirectNow();
      }
    } catch (error) {
      if (error.statusCode === 401) {
        alert("Invalid username/password. Try again!");
      } else if (error.statusCode === 403) {
        alert("This User is Disable.Please Contact Admin");
      }
      else {
        alert(error);
      }
      setIsLoading(false);
    }
  }

  return (
    <div className='Login'>
      <div className="home-hero hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <h1 className="heading-primary">Login For Admin </h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form className="card-body" >
              <div className="form-control justify-center">
                <label className="label">
                  <span className="label-text text-white">E-Mail</span>
                </label>
                <input
                  label="Email"
                  type="email"
                  variant="outlined"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onFormInputChange}
                  placeholder="Admin E-mail Address"
                  className="input input-bordered bg-white text-green-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={onFormInputChange}
                  placeholder="password" className="input input-bordered bg-white text-green-900"
                />
              </div>
              <div className="form-control mt-6 flex-row">
                <button variant={"contained"} className={`btn btn-primary ${isLoading && "btn-disabled"}  mr-2`} onClick={onSubmit}>
                  {isLoading ? <ImSpinner2 className='animate-spin' /> : "Login"}
                </button>
                <Link to="/">
                  <button className="btn btn-primary mr-2">
                    Cancel
                  </button>
                </Link>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
