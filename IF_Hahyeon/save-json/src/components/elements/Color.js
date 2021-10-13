import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Color = ({ field_id, field_label, field_value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="favcolor" className="form-label">{field_label}</label>
            <input type="color" className="form-control" id="favcolor" 
                value={field_value}
                onChange={event => handleChange(field_id, event)}
            />
        </div>
    )
}

export default Color
