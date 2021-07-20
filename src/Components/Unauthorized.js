import React from 'react';
import { Link } from 'react-router-dom';

//This page will be viewed for all unauthorized routes
//This page will be viewed inside protected route

const Unauthorized = () => {
  return (
    <div>
      <h1>Please login !</h1>
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default Unauthorized;