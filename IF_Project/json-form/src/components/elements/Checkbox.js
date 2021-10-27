import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Checkbox = ({ id, label, value, width }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-12'}>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" checked={value}
            onChange={event => handleChange(id, event)}/>
            <label class="form-check-label" for="gridCheck">
            {label}
            </label>
        </div>
        </div>
    )
}

export default Checkbox
