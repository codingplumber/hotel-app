import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const handleDelete = () => {
    console.log('delete')
}

const handleUpdate = () => {
    console.log('update');
}

const confirmation = () => {
    return (
        <div>
            {/*<p>Hi {first} {last}, you are booked from {fromRes} to {toRes}</p>*/}
            <div>
                <Link to='/reservations'><button onClick={handleUpdate}>Update Reservation</button></Link>
                <Link to='/'><button onClick={handleDelete}>Delete Reservation</button></Link>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        customers: state.customers
    }
};

export default connect(mapStateToProps, null)(confirmation);