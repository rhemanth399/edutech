import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    email: '',
    password: '',
    companyname: '',
    agency: '', // Added agency field
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate("/login")
  };

  return (
    <div className='mt-48'>
      <div>
        <h3 className='font-sans font-medium'>Sign in to your Popx account</h3>
      </div>
      <div className="flex justify-center ">
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4 w-full max-w-lg p-4">
          <TextField
            id="FullName"
            name="fullname"
            label={<span>Full Name <span style={{ color: 'red' }}>*</span></span>}
            variant="outlined"
            className="col-span-12"
            value={formData.fullname}
            onChange={handleChange}
            
          />
          <TextField
            id="phonenumber"
            name="mobile"
            label={<span>Phone number <span style={{ color: 'red' }}>*</span></span>}
            type="text"
            variant="outlined"
            className="col-span-12"
            value={formData.mobile}
            onChange={handleChange}
            
          />
          <TextField
            id="emailaddress"
            name="email"
            label={<span>Email address <span style={{ color: 'red' }}>*</span></span>}
            type="email"
            variant="outlined"
            className="col-span-12"
            value={formData.email}
            onChange={handleChange}
            
          />
          <TextField
            id="password"
            name="password"
            label={<span>Password <span style={{ color: 'red' }}>*</span></span>}
            type="password"
            variant="outlined"
            className="col-span-12"
            value={formData.password}
            onChange={handleChange}
           
          />
          <TextField
            id="companyname"
            name="companyname"
            label="Company Name"
            type="text"
            variant="outlined"
            className="col-span-12"
            value={formData.companyname}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'purple' } }}
          />
          <div className='col-span-12'></div>
          {/* Radio buttons for "Are you an agency?" */}
          <div className="col-span-12 flex items-center">
            <p className="text-purple-500 mr-4">Are you an agency?<span style={{color:'red'}}>*</span></p>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="agency"
                name="agency"
                value={formData.agency}
                onChange={handleChange}
                row
                
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <Button type="submit" variant="contained" className="col-span-12" color="primary">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
