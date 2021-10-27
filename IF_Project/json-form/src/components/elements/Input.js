import React, { useContext, useRef } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ id, label, placeholder, value, input }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={event => handleChange(id, event)}
                ref={input}
            />
        </div>
    )
}

export default Input
