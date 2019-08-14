import { Link } from 'gatsby';
import styled from 'styled-components';

const primaryColor = {
  normal: '#00ff9c',
  hover: '#4dffba',
  click: '#9c00ff',
};

const secondaryColor = {
  normal: '#ED3D63',
  hover: '#eb2b55',
  click: '#9c00ff',
};

const TextButton = styled(Link)`
  margin: 0 5px;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.primary ? primaryColor.normal : 'none')};
  border: 1px solid
    ${props => (props.primary ? primaryColor.normal : secondaryColor.normal)};
  color: ${props => (props.primary ? 'black' : secondaryColor.normal)};
  padding: 3% 2%;
  &:hover {
    color: ${props => (props.primary ? 'black' : secondaryColor.hover)};
    border: 1px solid
      ${props => (props.primary ? primaryColor.hover : secondaryColor.hover)};
    background-color: ${props => (props.primary ? primaryColor.hover : 'none')};
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.25);
  }
  &:active {
    color: ${props => (props.primary ? 'white' : secondaryColor.click)};
    border: 1px solid
      ${props => (props.primary ? primaryColor.click : secondaryColor.click)};
    background-color: ${props => (props.primary ? primaryColor.click : 'none')};
  }
  @media screen and (max-width: 600px) {
    padding: 2% 4%;
    width: 100%;
    text-align: center;
  }
`;

export default TextButton;
