import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

function Home() {
  const { token, profileData, fetchProfileData } = useAuth();
    
     useEffect(() => {

     if(!profileData.name){
       fetchProfileData(); 
    }});


  return (
    <div>
      {!token ? <h1>Login</h1> : <h1>Hi there</h1>}
    </div>
  );
}


export default Home