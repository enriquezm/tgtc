import styled from 'styled-components';

const Section = styled.section`
  max-width: 992px;
  margin: 0 auto;
  padding: 3% 0;
  background-color: ${props => props.bgColor};
  h3:first-child {
    text-align: ${props => props.centered ? "center" : "left"};
    margin-bottom: 25px;
  }
  @media screen and (max-width: 900px) {
    display: ${props => props.noMobile ? "none" : "block"};
  }
`;

export default Section;