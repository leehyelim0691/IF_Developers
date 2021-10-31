import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Button = ({ id, label, value, width }) => {
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
        <div className="mb-3" class={width ? setwidth : 'col-md-2'}>
            <button className="form-control btn-primary" id="button" aria-describedby="button"
                value={value}
                onChange={event => handleChange(id, event)}
            >{label}</button>
        </div>
    )
}

export default Button
