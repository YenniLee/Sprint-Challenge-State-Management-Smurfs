import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';
import Smurf from './Smurf';

const SmurfList = () => {
    const [smurfs] = useContext(SmurfContext);

    return (
        <div className='smurfList'>
            {smurfs.map(smurf => 
                <Smurf 
                    key={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />
            )}
        </div>
    )
};

export default SmurfList;