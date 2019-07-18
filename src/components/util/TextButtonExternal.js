import styled from 'styled-components';

const primaryColor = {
  normal: '#6829dc',
  hover: '#571fbf',
  click: '#481a9d',
};

const secondaryColor = {
  normal: '#ED3D63',
  hover: '#eb2b55',
  click: '#ea1946',
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
