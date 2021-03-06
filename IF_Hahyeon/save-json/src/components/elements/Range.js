import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Range = ({ field_id, field_label, field_value, field_min, field_max }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="range" className="form-label">{field_label}</label>
            <input type="range" className="form-range" id="range"
                value = {field_value}
                min = {field_min ? field_min : ''}
                max = {field_max ? field_max : ''}
                onChange={event => handleChange(field_id, event)}
            />
            <label htmlFor="range" className="form-label">{field_value}</label>
        </div>
    )
}

export default Range
