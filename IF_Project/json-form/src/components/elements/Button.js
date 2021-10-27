import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Button = ({ id, label, value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <button className="form-control btn-primary" id="button" aria-describedby="button"
                value={value}
                onChange={event => handleChange(id, event)}
            >{label}</button>
        </div>
    )
}

export default Button
