import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Range = ({ id, label, value, min, max , step, width}) => {
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
        <div class={width ? 'mb-3 '+setwidth : 'mb-3 col-md-12'}>
            <label htmlFor="range" className="form-label">{label}</label>
            <input type="range" className="form-range" id="range"
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                step = {step? step: "1"}
                onChange={event => handleChange(id, event)}
            />
            <label htmlFor="range" className="form-label">{value}</label>
        </div>
    )
}

export default Range
