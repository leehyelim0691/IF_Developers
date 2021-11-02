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

const Element = ({ field: { type, id, label, placeholder, value, input, options, min, max, pattern, cols,rows, maxlength, step, width } }) => {
// const Element = ({ group : { group_name, fields } }) => {

//     return group_name = {group_name},
//     ({ fields: { type, id, label, placeholder, value,input, options, min, max, pattern, cols,rows, maxlength, width } }) => {    
    switch (type) {
        case 'text':
            const idname = 'text'+{id};
            return (<Input
                id={idname}
                label={label}
                placeholder={placeholder}
                value={value}
                ref={input}
                width = {width}
            />)
        case 'select':
            return (<Select
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                options={options}
                width = {width}
            />)
        case 'checkbox':
            return (<Checkbox
                id={id}
                label={label}
                value={value}
                width = {width}
            />)
        case 'color':
            return (<Color
                id={id}
                label={label}
                value={value}
                width = {width}
            />)

        case 'date':
            return (<Date
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
                width = {width}
            />)
        case 'datetime-local':
            return (<Datetime
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
                width = {width}
            />)
        case 'month':
            return (<Month
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
                width = {width}
            />)
        case 'email':
            return (<Email
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                width = {width}
            />)

        case 'file':
            return (<File
                id={id}
                label={label}
                width = {width}
            />)

        case 'number':
            return (<Number
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max}
                width = {width}
            />)
        case 'tel':
            return (<Telephone
                id={id}
                label={label}
                value={value}
                placeholder={placeholder}
                pattern={pattern}
                width = {width}
                
            />)
        case 'range':
            return (<Range
                id={id}
                label={label}
                value={value}
                min = {min}
                max = {max} 
                step = {step}
                width = {width}                   
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
                width = {width}                     
            />)
        case 'button':
            return (<Button
                id={id}
                label={label}
                value={value}
                width = {width}                    
            />)

        case 'radio':
            return (<Radio
                id={id}
                label={label}
                value = {value}
                options={options}
                width = {width}
            />)
        default:
            return null;
    }
}




export default Element



// const Element = ({ group : { group_name, fields } }) => {
    
//     return group_name = {group_name},
//     ({ fields: { type, id, label, placeholder, value,input, options, min, max, pattern, cols,rows, maxlength, width } }) => {

//     switch (type) {
//         case 'text':
//             const idname = 'text'+{id};
//             return (<Input
//                 fid={idname}
//                 label={label}
//                 placeholder={placeholder}
//                 value={value}
//                 ref={input}
//                 width = {width}

//             />)
//         case 'select':
//             return (<Select
//                 id={id}
//                 label={label}
//                 placeholder={placeholder}
//                 value={value}
//                 options={options}
//                 width = {width}
//             />)
//         case 'checkbox':
//             return (<Checkbox
//                 id={id}
//                 label={label}
//                 value={value}
//                 width = {width}
//             />)
//         case 'color':
//             return (<Color
//                 id={id}
//                 label={label}
//                 value={value}
//                 width = {width}
//             />)

//         case 'date':
//             return (<Date
//                 id={id}
//                 label={label}
//                 value={value}
//                 min = {min}
//                 max = {max}
//                 width = {width}
//             />)
//         case 'datetime-local':
//             return (<Datetime
//                 id={id}
//                 label={label}
//                 value={value}
//                 min = {min}
//                 max = {max}
//                 width = {width}
//             />)
//         case 'month':
//             return (<Month
//                 id={id}
//                 label={label}
//                 value={value}
//                 min = {min}
//                 max = {max}
//                 width = {width}
//             />)
//         case 'email':
//             return (<Email
//                 id={id}
//                 label={label}
//                 placeholder={placeholder}
//                 value={value}
//                 width = {width}
//             />)

//         case 'file':
//             return (<File
//                 id={id}
//                 label={label}
//                 width = {width}
//             />)

//         case 'number':
//             return (<Number
//                 id={id}
//                 label={label}
//                 value={value}
//                 min = {min}
//                 max = {max}
//                 width = {width}
//             />)
//         case 'tel':
//             return (<Telephone
//                 id={id}
//                 label={label}
//                 value={value}
//                 placeholder={placeholder}
//                 pattern={pattern}
//                 width = {width}
                
//             />)
//         case 'range':
//             return (<Range
//                 fid={id}
//                 label={label}
//                 value={value}
//                 min = {min}
//                 max = {max} 
//                 width = {width}                   
//             />)
//         case 'textarea':
//             return (<Textarea
//                 id={id}
//                 label={label}
//                 value={value}
//                 placeholder={placeholder}
//                 cols = {cols}
//                 rows = {rows} 
//                 maxlength = {maxlength} 
//                 width = {width}                               
//             />)
//         case 'button':
//             return (<Button
//                 id={id}
//                 label={label}
//                 value={value}
//                 width = {width}                    
//             />)

//         case 'radio':
//             return (<Radio
//                 id={id}
//                 label={label}
//                 value = {value}
//                 options={options}
//                 width = {width}
//             />)
//         default:
//             return null;
//     }
//     }


// }

// export default Element