import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Month = ({ field_id, field_label, field_value, field_min, field_max }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="Month" className="form-label">{field_label}</label>
            <input type="month" className="form-control" id="month" 
                value = {field_value}
                min = {field_min ? field_min : ''}
                max = {field_max ? field_max : ''}
                onChange={event => handleChange(field_id, event)}
            />
        </div>
    )
}

export default Month
