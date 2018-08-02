import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';

import classes from './Reservations.css';
// import Confirmation from '../Confirmation/Confirmation';

const reservations = props => {
    const { first, last, fromRes, toRes, onInputChange } = props;

    const handleClick = () => {
        // axios.post('http://localhost:3001/api/createCustomer', {first, last, fromRes, toRes});
    }

    const focus = (e) => {
        e.target.value = '';
    }

    return (
        <div className={classes.Res}>
            <div>
                <label>First Name:<input 
                    type='text' 
                    name='firstName' 
                    value={first} 
                    onFocus={focus}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                <label>Last Name:<input 
                    type='text' 
                    name='lastName' 
                    value={last} 
                    onFocus={focus}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
            </div>
            <div>
                <label>From:<input 
                    type='text' 
                    name='fromRes' 
                    value={fromRes} 
                    onFocus={focus}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                <label>To:<input 
                    type='text' 
                    name='toRes' 
                    value={toRes} 
                    onFocus={focus}
                    onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
            </div>
            
            <Link to='/confirmation'><button onClick={handleClick}>Submit</button></Link>
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        first: state.firstName,
        last: state.lastName,
        toRes: state.toRes,
        fromRes: state.fromRes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (name, value) => dispatch({ type: 'CHANGE_INFO', payload: {name, value} }),
        // onCustomerAdd: () => dispatch({ type: 'ADD_CUSTOMER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reservations);