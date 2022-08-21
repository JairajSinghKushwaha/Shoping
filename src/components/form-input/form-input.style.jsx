import styled, {css} from 'styled-components';

const subColor = "grey";
const mainColor = "black";

// use css if, you need to pass blocks of styles around and conditionally render them.
const shrinkLabelStyle = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
// we will get ({shrink}) shrink in bool in the parameter.
// and if 'shrink' will be true then shrinkLabelStyle will be applied
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({shrink}) => shrink && shrinkLabelStyle }; 
  `
 export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyle};
  }
  ` 
 export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
 ` 
