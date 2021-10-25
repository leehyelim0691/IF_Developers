import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';
import Color from './elements/Color';
import Date from './elements/Date';
import Datetime from './elements/Datetime';
import Month from './elements/Month';
import Email from './elements/Email';
import File from './elements/File';
import Number from './elements/Number';
import Telephone from './elements/Telephone';
import Range from './elements/Range';
import Textarea from './elements/Textarea';
import Button from './elements/Button';
import Radio from './elements/Radio';

const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options, field_min, field_max, field_pattern, field_cols,field_rows, field_maxlength } }) => {

    switch (field_type) {
        case 'text':
            return (<Input
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}

            />)
        case 'select':
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
            />)
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)
        case 'color':
            return (<Color
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)

        case 'date':
            return (<Date
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_min = {field_min}
                field_max = {field_max}
            />)
        case 'datetime-local':
            return (<Datetime
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_min = {field_min}
                field_max = {field_max}
            />)
        case 'month':
            return (<Month
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_min = {field_min}
                field_max = {field_max}
            />)
        case 'email':
            return (<Email
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
            />)

        case 'file':
            return (<File
                field_id={field_id}
                field_label={field_label}
            />)

        case 'number':
            return (<Number
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_min = {field_min}
                field_max = {field_max}
            />)
        case 'tel':
            return (<Telephone
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_placeholder={field_placeholder}
                field_pattern={field_pattern}
                
            />)
        case 'range':
            return (<Range
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_min = {field_min}
                field_max = {field_max}                    
            />)
        case 'textarea':
            return (<Textarea
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
                field_placeholder={field_placeholder}
                field_cols = {field_cols}
                field_rows = {field_rows} 
                field_maxlength = {field_maxlength}                      
            />)
        case 'button':
            return (<Button
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}                    
            />)

        case 'radio':
            return (<Radio
                field_id={field_id}
                field_label={field_label}
                field_value = {field_value}
                field_options={field_options}
            />)
        default:
            return null;
    }


}

export default Element
