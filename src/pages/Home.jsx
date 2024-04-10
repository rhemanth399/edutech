import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className='mb-6'>Welcome to PopX</h2>
      <div className='flex flex-col gap-4'>
        <Button component={Link} to="/create-account" variant="contained" sx={{ bgcolor: 'purple',color:'white' }} >
          Create Account
        </Button>
        <Button component={Link} to="/login" variant="contained" sx={{ bgcolor: 'violet',color:'black' }} >
          Already Registered? Login
        </Button>
      </div>
    </div>
  )
}

export default Home
