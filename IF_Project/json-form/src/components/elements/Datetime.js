import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Datetime = ({ id, label, value, min, max, width }) => {
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
        <div class={width ? 'mb-3 col-md-'+width : 'mb-3 col-md-4'}>
            <label htmlFor="datetime" className="form-label">{label}</label>
            <input type="datetime-local" className="form-control" id="datetime" 
                value = {value}
                min = {min ? min : today}
                max = {max ? max : ''}
                onChange={event => handleChange(id, event)}
            />
        </div>
    )
}

export default Datetime
