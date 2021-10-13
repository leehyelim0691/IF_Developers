import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Radio = ({ field_id, field_label, field_value, field_options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
          <div className="mb-3">
            <label className="form-label">{field_label}</label>
            {field_options.length > 0 && field_options.map((option) => 
              
                    <label>
                        <input type="radio" name={field_value} value={option.option_label} />
                        {option.option_label}
                    </label>
             
            )}
            </div>
            
        </>
    )
}

export default Radio
