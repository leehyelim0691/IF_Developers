import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Radio = ({ id, label, value, options, width }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
          <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-12'}>
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
