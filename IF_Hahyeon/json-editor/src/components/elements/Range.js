import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Range = ({ id, label, value, min, max , width}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-12'}>
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
