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

const Element = ({ field: { type, id, label, placeholder, value, input, options, min, max, pattern, cols,rows, maxlength } }) => {

    switch (type) {
        case 'text':
            return (<Input
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                ref={input}
            />)
        case 'select':
            return (<Select
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                options={options}
            />)
        case 'checkbox':
            return (<Checkbox
                id={id}
                label={label}
                value={value}
            />)
        case 'color':
            return (<Color
                id={id}
                label={label}
                value={value}
            />)

        case 'date':
            return (<Date
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
            />)
        case 'datetime-local':
            return (<Datetime
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
            />)
        case 'month':
            return (<Month
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
            />)
        case 'email':
            return (<Email
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
            />)

        case 'file':
            return (<File
                id={id}
                label={label}
            />)

        case 'number':
            return (<Number
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
            />)
        case 'tel':
            return (<Telephone
                id={id}
                label={label}
                value={value}
                placeholder={placeholder}
                pattern={pattern}
                
            />)
        case 'range':
            return (<Range
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}                    
            />)
        case 'textarea':
            return (<Textarea
                id={id}
                label={label}
                value={value}
                placeholder={placeholder}
                cols = {cols}
                rows = {rows} 
                maxlength = {maxlength}                      
            />)
        case 'button':
            return (<Button
                id={id}
                label={label}
                value={value}                    
            />)

        case 'radio':
            return (<Radio
                id={id}
                label={label}
                value = {value}
                options={options}
            />)
        default:
            return null;
    }


}

export default Element
