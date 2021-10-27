import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Color = ({ id, label, value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="favcolor" className="form-label">{label}</label>
            <input type="color" className="form-control" id="favcolor" 
                value={value}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Color
