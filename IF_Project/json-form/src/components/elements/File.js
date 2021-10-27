import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const File = ({ id, label, width}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-6'}>
            <label htmlFor="File" className="form-label">{label}</label>
            <input type="file" className="form-control" id="file" aria-describedby="file"
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default File
