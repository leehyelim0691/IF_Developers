import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Month = ({ id, label, value, min, max , width}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-4'}>
            <label htmlFor="Month" className="form-label">{label}</label>
            <input type="month" className="form-control" id="month" 
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Month
