import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Textarea = ({ field_id, field_label, field_placeholder, field_value, field_maxlength, field_rows, field_cols }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="textarea" className="form-label">{field_label}</label>
            <textarea className="form-control" id="textarea" aria-describedby="textarea"
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                cols={field_cols}
                rows={field_rows}
                maxlength={field_maxlength}
                onChange={event => handleChange(field_id, event)}
            />
        </div>
    )
}

export default Textarea
