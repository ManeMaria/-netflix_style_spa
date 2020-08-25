import React from 'react';
import PropTypes, { array } from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;
const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 86px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 90%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin: 0 5% 35px 5%;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  type, value, name, onChange, label, suggestions
} ) {
  //const suggestionsArray = Array(suggestions);
  const fieldId = `${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions);
  
  


  return (

    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          autoComplete='off'
          hasValue={hasValue}
          onChange={onChange}
          list={`suggestionFor_${fieldId}`}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
          
        <datalist id={`suggestionFor_${fieldId}`}>
         { /*suggestions.map((suggestion)=>(
            <option value={suggestion}/>
         ))*/}
            {<option value={'Front End'} key={`suggestionFor_${fieldId}_option_${'Front End'}`}/>}
            {<option value={'Back End'} key={`suggestionFor_${fieldId}_option_${'Back End'}`}/>}
            {<option value={'Filmes'} key={`suggestionFor_${fieldId}_option_${'Filmes'}`}/>}
            {<option value={'Games'} key={`suggestionFor_${fieldId}_option_${'Games'}`}/>}
            {<option value={'Aprendendo a aprender tecnologia'} key={`suggestionFor_${fieldId}_option_${'at'}`}/>}
          </datalist>
    
      </Label>
    </FormFieldWrapper>
  );
}

FormField.propsDefault = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: []
}

FormField.propTypes = {
 label: PropTypes.string.isRequired,
 type: PropTypes.string,
 name: PropTypes.string.isRequired,
 value: PropTypes.string,
 onChange: PropTypes.func,
 suggestions: PropTypes.arrayOf(PropTypes.string)
};

export default FormField;
