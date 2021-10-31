import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Checkbox = ({ id, label, value, width }) => {
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
        <div class={width ? 'mb-3 ' + setwidth : 'mb-3 col-md-12'}>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" checked={value}
            onChange={event => handleChange(id, event)}/>
            <label class="form-check-label" for="gridCheck">
            {label}
            </label>
        </div>
        </div>
    )
}

export default Checkbox
