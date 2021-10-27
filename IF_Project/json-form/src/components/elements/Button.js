import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Button = ({ id, label, value, width }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3" class={width ? 'col-md-'+width : 'col-md-2'}>
            <button className="form-control btn-primary" id="button" aria-describedby="button"
                value={value}
                onChange={event => handleChange(id, event)}
            >{label}</button>
        </div>
    )
}

export default Button
