import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Email = ({ id, label, placeholder, value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="Email" className="form-label">{label}</label>
            <input type="email" className="form-control" id="Email" aria-describedby="email"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Email
