import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';

const Smurf = props => {
    const [smurfs, setSmurfs] = useContext(SmurfContext);

    return (
        <div className='smurf-card'>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
};

export default Smurf;