import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Range = ({ id, label, value, min, max }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="range" className="form-label">{label}</label>
            <input type="range" className="form-range" id="range"
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
            <label htmlFor="range" className="form-label">{value}</label>
        </div>
    )
}

export default Range
