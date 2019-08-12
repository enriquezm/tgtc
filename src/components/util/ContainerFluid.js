import styled from 'styled-components';

const ContainerFluid = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor || 'var(--main-bg-color)'};
  h3 {
    color: white;
  }
  p {
    color: ${props => props.color || 'var(--primary-font-color)'};
  }
`;

export default ContainerFluid;
