import styled from 'styled-components';

const ContainerFluid = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor || 'white'};
  h3 {
    color: white;
  }
  p {
    color: ${props => props.color || 'black'};
  }
`;

export default ContainerFluid;
