import React from 'react';

const ApiError = ( { mensaje }) => (
    <p className = "alert alert-danger error ">{ mensaje }</p>
);
 
export default ApiError;