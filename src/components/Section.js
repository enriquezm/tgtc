import styled from 'styled-components';

const Section = styled.section`
  max-width: 992px;
  margin: 0 auto;
  padding: 3% 0;
  h3:first-child {
    text-align: ${props => props.centered ? "center" : "left"};
    margin-bottom: 25px;
  }
  background-color: ${props => props.bgColor}
`;

export default Section;