import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Datetime = ({ field_id, field_label, field_value, field_min, field_max }) => {
    const { handleChange } = useContext(FormContext)
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd+'T00:00';
    
    return (
        <div className="mb-3">
            <label htmlFor="datetime" className="form-label">{field_label}</label>
            <input type="datetime-local" className="form-control" id="datetime" 
                value = {field_value}
                min = {field_min ? field_min : today}
                max = {field_max ? field_max : ''}
                onChange={event => handleChange(field_id, event)}
            />
        </div>
    )
}

export default Datetime
