

import * as React from 'react';
import Input from './input';
import Checkbox from './checkbox';

interface FormProps {
    
}
 
interface FormState {
    
}
 
class Form<Props, State> extends React.Component<FormProps, FormState> {
    state: FormState = {}

    private inputClassName = (className: string) => className + "__input"

    renderInput = (label: string, name: string, className: string, type: string = "text"): JSX.Element => {
        return <Input
            className={this.inputClassName(className)}
            label={label}
            name={name}
            type={type}
        />
    }

    renderSubmit = (text: string): JSX.Element => {
        return (
            <button type="submit">
                {text}
            </button>
        )
    }

    renderCheckbox = (name: string, text: string): JSX.Element => {
        return <Checkbox
            name={name}
            label={text}
         />
    }
}
 
export default Form;