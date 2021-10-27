import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Number = ({ id, label, value, min, max, width }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-2'}>
            <label htmlFor="quantity" className="form-label">{label}</label>
            <input type="number" className="form-control" id="quantity" 
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Number
