import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Email = ({ field_id, field_label, field_placeholder, field_value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="Email" className="form-label">{field_label}</label>
            <input type="email" className="form-control" id="Email" aria-describedby="email"
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                onChange={event => handleChange(field_id, event)}
            />
        </div>
    )
}

export default Email
