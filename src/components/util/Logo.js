import styled from 'styled-components';
import { Link } from 'gatsby';

const Logo = styled(Link)`
  margin: 0;
  padding: 0;
  color: inherit;
  font-weight: 700;
  font-size: 24px;
  color: white;
  &:hover {
    color: #009fff;
  }
`;

export default Logo;
