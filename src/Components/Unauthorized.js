import React from 'react';
import { Link } from 'react-router-dom';

//This page will be viewed for all unauthorized routes
//This page will be viewed inside protected route
//This feature branch change 3

const Unauthorized = () => {
  return (
    <div>
      <h1>Please login !</h1>
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default Unauthorized;