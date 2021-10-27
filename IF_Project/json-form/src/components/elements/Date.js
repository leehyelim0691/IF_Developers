import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Date = ({ id, label, value, min, max }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="date" className="form-label">{label}</label>
            <input type="date" className="form-control" id="date" 
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Date
