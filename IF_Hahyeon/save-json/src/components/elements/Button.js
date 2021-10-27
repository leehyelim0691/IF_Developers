import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Button = ({ field_id, field_label, field_value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <button className="form-control btn-primary" id="button" aria-describedby="button"
                value={field_value}
                onChange={event => handleChange(field_id, event)}
            >{field_label}</button>
        </div>
    )
}

export default Button
