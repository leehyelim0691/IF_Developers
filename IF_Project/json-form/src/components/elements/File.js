import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const File = ({ id, label, width}) => {
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
            <label htmlFor="File" className="form-label">{label}</label>
            <input type="file" className="form-control" id="file" aria-describedby="file"
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default File
