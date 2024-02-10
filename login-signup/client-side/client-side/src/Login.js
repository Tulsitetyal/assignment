import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validate from './Login_Validation';
import axios from 'axios';

function Login({setIsLoggedIn}) {
  const [errors,setErrors] =useState({})
  const [values, setValue]= useState({
    email: '',
    password: ''
  })
   const navigate=useNavigate();
  const handleInput=(event) => {
      setValue(prev=>({...prev,[event.target.name]: [event.target.value]}))
      
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
    if( errors.email==='' && errors.password==='') {
      axios.post('http://localhost:8081/login', values)
      .then(res=>{
        console.log(res.data);
        if(res.data==="Success"){
          setIsLoggedIn(true);
          navigate('/profile');
        }else{
          alert("No record exist")
        }
        
      })
      .catch(err=>console.log(err))
  }
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-50'>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' onChange={handleInput} className='form-control' id='email'name='email' placeholder='Enter your email address'/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password'  onChange={handleInput} className='form-control' id='password' name='password' placeholder='Enter Password'/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success'>Log in</button>
          <p className='mt-3'>By logging in, you agree to our terms and policies</p>
          <Link to="/signup" className='btn btn-outline-success mt-3'>Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
