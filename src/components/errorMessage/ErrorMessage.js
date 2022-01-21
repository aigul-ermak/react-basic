import React from 'react';

import img from './error.gif';

export const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width:'250px', height: '250px', objectFit:'contain',
       margin: '0 auto'}} src={img} alt="error message"/>
    )
}
