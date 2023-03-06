import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { UserContext } from '../contexts/user.context';
import { Link, redirect, useNavigate } from 'react-router-dom';

const AddProject = () => {

  const navigate = useNavigate();

  const { logOutUser } = useContext(UserContext);

  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser();
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
     
    } catch (error) {
      alert(error)
    }
    navigate('/');
  }

  return (
    <div className='ADDPROJECT'>
      AddProject
      <button variant="contained" className="btn btn-primary mr-2" onClick={logOut}>
                Logout
      </button>
      <Link to="/signup">
      <button variant="contained" className="btn btn-primary mr-2" >Admin Registration</button>
      </Link>
      
    </div>
  )
}

export default AddProject
