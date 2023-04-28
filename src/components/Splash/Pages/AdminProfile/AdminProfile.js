import React from 'react';

import {
  useNavigate
} from "react-router-dom";

const AdminProfile = props => {
  const navigate = useNavigate();

  return (
    <div>
      AdminProfile
      <button 
        onClick={() => (
          props.clearLocalStorage(),
          navigate('/')
        )}
      >
        Logout
      </button>
    </div>
  )
};

export default AdminProfile;