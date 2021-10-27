import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Telephone = ({ id, label, placeholder, value, pattern }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="tel" className="form-label">{label}</label>
            <input type="tel" className="form-control" id="tel" aria-describedby="tel"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                pattern={pattern ? pattern : '[0-9]{3}-[0-9]{4}-[0-9]{4}'}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Telephone
