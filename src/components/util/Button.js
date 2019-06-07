import styled from 'styled-components';

const Button = styled.button`
  padding: 4px 10px;
  background-color: #009FFF;
  border: 1px solid #009FFF;
  color: white;
  font-weight: 300;
  &:hover {
    background-color: #007fcc;
    color: white;
    cursor: pointer;
  }
`;

export default Button;