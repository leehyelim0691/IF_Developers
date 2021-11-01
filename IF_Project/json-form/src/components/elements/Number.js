import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Number = ({ id, label, value, min, max, width }) => {
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
        <div class='mb-3'>
            <label htmlFor="quantity" className="form-label">{label}</label>
            <input type="number" className={width ? 'form-border '+setwidth : 'col-md-4'} id="quantity" 
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Number
