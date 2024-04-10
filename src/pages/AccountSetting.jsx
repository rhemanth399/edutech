import React from 'react';
import user from '../user.png'

const AccountSettings = ({ email }) => {
  
  const profilePicUrl = 'https://icons8.com/icon/42865/user';

  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="font-sans font-medium mb-4">Account Settings</h3>
      <div className="flex justify-center items-center flex-col">
        <img src={user} alt="Profile" className="rounded-full h-24 w-24 mb-2" />
        <p className="text-lg mb-2">{email}</p>
      </div>
      
    </div>
  );
};

export default AccountSettings;
