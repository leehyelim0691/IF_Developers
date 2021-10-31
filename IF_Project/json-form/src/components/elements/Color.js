import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Color = ({ id, label, value, width }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div >
            <label htmlFor="favcolor" className="form-label">{label}</label>
            <input type="color" class={width? 'mb-3 col-md-'+width: 'mb-3 form-control-color'} className="form-control" id="favcolor" 
                value={value}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Color
