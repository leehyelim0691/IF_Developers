import React, { useContext, useRef } from 'react'
import { FormContext } from '../../FormContext';
import {  Col} from 'reactstrap';

const Input = ({ id, label, placeholder, value, input, width }) => {
    const { handleChange } = useContext(FormContext)
    var setwidth = ""
    switch(width){
        case "one" : setwidth = "col-md-1"; break;
        case "quarter" : setwidth = "col-md-4"; break;
        case "half" : setwidth = "col-md-6" ; break;
        case "full" : setwidth = "col-md-12" ; break;
        default: setwidth = width;
    }

    return (
        <div class={width ? 'mb-3 form-group '+setwidth : 'mb-3 form-group col-md-6'}>
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
