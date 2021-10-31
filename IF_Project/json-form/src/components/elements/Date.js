import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Date = ({ id, label, value, min, max, width }) => {
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
        <div className={width ? 'mb-3 '+setwidth : 'mb-3 col-md-4'} >
            <label htmlFor="date" className="form-label">{label}</label>
            <input type="date" className='form-control ' id="date" 
                value = {value}
                min = {min ? min : ''}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Date
