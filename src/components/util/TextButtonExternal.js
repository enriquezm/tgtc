import styled from 'styled-components';

const primaryColor = {
  normal: '#7469F4',
  hover: '#685edb',
  click: '#5c54c3',
};

const secondaryColor = {
  normal: '#84DCC6',
  hover: '#76c6b2',
  click: '#69b09e',
};

const TextButtonExternal = styled.a`
  margin: 0 5px;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  color: white;
  padding: 1% 2%;
  background-color: ${props =>
    props.primary ? primaryColor.normal : secondaryColor.normal};
  border: 1px solid
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
