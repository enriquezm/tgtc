import styled from 'styled-components';

const P = styled.p`
  text-align: ${props => props.align};
  color: ${props => props.color || "black"};
  margin-bottom: 50px;
`;

export default P;