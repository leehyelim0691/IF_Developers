import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
import {  Col} from 'reactstrap';

const Email = ({ id, label, placeholder, value, width}) => {
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
        <div class={width ? 'mb-3 '+setwidth : 'mb-3 col-md-6'}>
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
