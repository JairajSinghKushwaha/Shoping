import {
    FormInputLabel,
    Input,
    Group
}  
from './form-input.style.jsx';
const FormInput = ({label, ...otherProps}) => {
    // console.log(label);
    return(
        <Group>
            <Input {...otherProps} />
            { label && (
              <FormInputLabel shrink = {otherProps.value.label}> {label} </FormInputLabel>) }
           
        </Group>
    );
}
export default FormInput;