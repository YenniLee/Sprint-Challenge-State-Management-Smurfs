import React, { useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts';
import { useForm } from '../hooks/useForm';

const AddSmurf = () => {
    const [smurfs, setSmurfs] = useContext(SmurfContext);
    console.log(smurfs)
    const initialValue = ({
        name: '',
        age: '',
        height: ''
    });
    const [values, handleChanges] = useForm(initialValue);

    const handleSubmit = () => {
        axios 
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log('post res', res)
                setSmurfs(res.data)
            })
            .catch(err => console.log('post err', err))
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name='name'
                placeholder='Name'
                value={values.name}
                onChange={handleChanges}
            />
            <input 
                name='age'
                placeholder='Age'
                value={values.age}
                onChange={handleChanges}
            />
            <input 
                name='height'
                placeholder='Height'
                value={values.height}
                onChange={handleChanges}
            />
            <button type='submit'>Add Smurf</button>
        </form>
    )
};

export default AddSmurf;

