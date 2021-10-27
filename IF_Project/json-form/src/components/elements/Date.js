import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Date = ({ id, label, value, min, max, width }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-4'} >
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
