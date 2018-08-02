import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.css';

const navbar = () => (
    <div className={classes.nav}>
        <h1>Chez Jason</h1>
        <div className={classes.routes}>
            <Link to='/'>Home</Link>
            <Link to='/reservations'>Reservations</Link>
        </div>
    </div>
);

export default navbar;