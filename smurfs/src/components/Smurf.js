import React from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux'

const Smurf = ({ smurf, deleteSmurf }) => {
    
    const handleDelete = () => {
        deleteSmurf(smurf.id)
    };

    return (
        <div className='smurf'>
            <h3>Name: {smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
};

export default connect(null, { deleteSmurf })(Smurf);