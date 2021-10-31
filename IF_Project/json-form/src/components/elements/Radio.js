import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Radio = ({ id, label, value, options, width }) => {
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
        <>
          <div class={width ? 'mb-3 '+setwidth : 'mb-3 col-md-12'}>
            <label className="form-label">{label}</label>
            {options.length > 0 && options.map((option) => 
                <div class="form-check">
                    <label>
                        <input type="radio" className="form-check-input" name={value} value={option.option_label} />
                        {option.option_label}
                    </label>
                </div>
             
            )}
            </div>
            
        </>
    )
}

export default Radio
