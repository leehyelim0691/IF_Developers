import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Number = ({ id, label, value, min, max }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="quantity" className="form-label">{label}</label>
            <input type="number" className="form-control" id="quantity" 
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Number
