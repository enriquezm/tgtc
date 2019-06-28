import { Link } from 'gatsby';
import styled from 'styled-components';

const primaryColor = {
  normal: '#7469F4',
  hover: '#685edb',
  click: '#5c54c3',
};

const secondaryColor = {
  normal: '#7469F4',
  hover: '#9d96f7',
  click: '#b9b4f9',
};

const TextButton = styled(Link)`
  margin: 0 5px;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  background-color: ${props => (props.primary ? primaryColor.normal : 'none')};
  border: 1px solid
    ${props => (props.primary ? primaryColor.normal : secondaryColor.normal)};
  color: ${props => (props.primary ? 'white' : secondaryColor.normal)};
  padding: 1% 2%;
  &:hover {
    color: ${props => (props.primary ? 'white' : secondaryColor.hover)};
    border: 1px solid
      ${props => (props.primary ? primaryColor.hover : secondaryColor.hover)};
    background-color: ${props => (props.primary ? primaryColor.hover : 'none')};
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
