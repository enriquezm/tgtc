import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 15px;
  border: 2px solid ${props => props.primary ? '#FF4280' : '#7C42FF'};
  border-radius: 50px;
  background-color: transparent;
  color: white;
  font-weight: 300;
  &:hover {
    background-color: ${props => props.primary ? '#FF4280' : '#7C42FF'};
    color: white;
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default Button;