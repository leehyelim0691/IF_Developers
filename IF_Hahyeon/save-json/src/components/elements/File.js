import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const File = ({ field_id, field_label}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="File" className="form-label">{field_label}</label>
            <input type="file" className="form-control" id="file" aria-describedby="file"
                onChange={event => handleChange(field_id, event)}
            />
        </div>
    )
}

export default File
