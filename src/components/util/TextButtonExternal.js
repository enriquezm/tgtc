import styled from 'styled-components';

const primaryColor = {
  normal: '#00ff9c',
  hover: '#4dffba',
  click: '#9c00ff',
};

const secondaryColor = {
  normal: '#00ff9c',
  hover: '#c592ff',
  click: '#9c00ff',
};

const TextButtonExternal = styled.a`
  margin: 0 5px;
  width: 100%;
  text-align: center;
  color: ${props => (props.primary ? 'black' : secondaryColor.normal)};
  padding: 3% 2%;
  background-color: ${props => (props.primary ? primaryColor.normal : 'none')};
  border: 2px solid
    ${props => (props.primary ? primaryColor.normal : secondaryColor.normal)};
  &:hover {
    color: white;
    border: 1px solid
      ${props => (props.primary ? primaryColor.hover : secondaryColor.hover)};
    background-color: ${props =>
      props.primary ? primaryColor.hover : secondaryColor.hover};
  }
  &:active {
    color: 'white';
    border: 1px solid
      ${props => (props.primary ? primaryColor.click : secondaryColor.click)};
    background-color: ${props =>
      props.primary ? primaryColor.click : secondaryColor.click};
  }
  @media screen and (max-width: 600px) {
    padding: 2% 4%;
    width: 100%;
    text-align: center;
  }
`;

export default TextButtonExternal;
