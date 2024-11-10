import React from 'react';
import UserContext, { useUser } from './UserContext'
import { useContext } from 'react';

function UserDetails() {
    const userData = UserContext(useContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;