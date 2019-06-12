import { Link } from 'gatsby';
import styled from 'styled-components';

const TextButton = styled(Link)`
  margin-top: 25px;
  border: 1px solid #009fff;
  padding: 1% 2%;
  &:hover {
    color: white;
    background: #009fff;
  }
  @media screen and (max-width: 600px) {
    padding: 2% 4%;
    width: 100%;
    text-align: center;
  }
`;

export default TextButton;
