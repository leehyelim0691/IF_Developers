import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Radio = ({ id, label, value, options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
          <div className="mb-3">
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
