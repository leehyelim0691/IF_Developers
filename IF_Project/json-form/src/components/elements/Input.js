import React, { useContext, useRef } from 'react'
import { FormContext } from '../../FormContext';
import {  Col} from 'reactstrap';

const Input = ({ id, label, placeholder, value, input, width }) => {
    const { handleChange } = useContext(FormContext)
    console.log(width)
    return (
        <div class={width ? 'mb-3 form-group col-md-'+width : 'mb-3 form-group col-md-6'}>
            <label htmlFor="inputText" className="form-label">{label}</label>
            <input type="text" className="form-control" id="input_text" aria-describedby="input"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={event => handleChange(id, event)}
                ref={input}
            />
        </div>
    )
}

export default Input
