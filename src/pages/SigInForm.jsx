import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountSettings from './AccountSetting'; // Import the AccountSettings component

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    loggedIn: false, // Add a loggedIn state to track if the user is logged in
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can access formData.email and formData.password and perform login logic
    console.log('Form submitted:', formData);
    // Simulate successful login by setting loggedIn to true
    setFormData((prevData) => ({
      ...prevData,
      loggedIn: true,
    }));
  };

  return (
    <div className='mt-48'>
    
      {formData.loggedIn ? (
        // If loggedIn is true, render AccountSettings component
        <AccountSettings email={formData.email} />
      ) : (
        <div className=" flex justify-center">
        
        
        
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4 w-full max-w-lg p-4">
        <h3 className='font-sans font-medium col-span-12'>Signin to your Popx account</h3>
    
          <TextField
            id="email"
            name="email"
            label="Enter Email Address"
            variant="outlined"
            className="col-span-12"
            value={formData.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'purple' } }}
          />
          <TextField
            id="password"
            name="password"
            label="Enter Password"
            type="password"
            variant="outlined"
            className="col-span-12"
            value={formData.password}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'purple' } }}
          />
          <Button type="submit" variant="contained" className="col-span-12" color="primary">
            Login
          </Button>
        </form>
        </div>
      )}
    </div>
    
  );
};

export default SignInForm;
