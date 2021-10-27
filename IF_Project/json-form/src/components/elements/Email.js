import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Email = ({ id, label, placeholder, value, width}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-6'}>
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
