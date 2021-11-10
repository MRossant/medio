import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div id="error-container">
        <h1 className="error-message">404 - Not Found!</h1>
        <Link to="/" className="back-home-message">
            Bring me to the homepage...
        </Link>
    </div>
);

export default NotFound;