import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Textarea = ({ id, label, placeholder, value, maxlength, rows, cols , width}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-12'}>
            <label htmlFor="textarea" className="form-label">{label}</label>
            <textarea className="form-control" id="textarea" aria-describedby="textarea"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                cols={cols}
                rows={rows}
                maxlength={maxlength}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Textarea
