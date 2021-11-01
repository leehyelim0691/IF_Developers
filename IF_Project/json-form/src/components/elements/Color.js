import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Color = ({ id, label, value, width }) => {
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
        <div className="mb-3" >
            <label htmlFor="favcolor" className="form-label">{label}</label>
            <input type="color" className={width? "form-border "+ setwidth: 'form-border col-md-1'}  id="favcolor" 
                value={value}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Color
