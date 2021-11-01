import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ({ id, label, options, width }) => {
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
        <div class={width ? 'mb-3 '+setwidth : 'mb-3 col-md-6'}>
            <label className="form-label">{label}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={event => handleChange(id, event)}
            >
                <option >옵션을 선택하세요</option>
                {options.length > 0 && options.map((option, i) =>
                    <option value={option.option_label} key={i}>{option.option_label}</option>

                )}
            </select>
        </div>
        </>
    )
}

export default Select
