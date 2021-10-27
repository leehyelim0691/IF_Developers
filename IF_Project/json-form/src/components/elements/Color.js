import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Color = ({ id, label, value, width }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3" >
            <label htmlFor="favcolor" className="form-label">{label}</label>
            <input type="color" class={width? 'form-control col-md-'+width: "form-control form-control-color"} id="favcolor" 
                value={value}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Color
