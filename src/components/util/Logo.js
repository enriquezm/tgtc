import styled from 'styled-components';
import { Link } from 'gatsby';

const Logo = styled(Link)`
    margin: 0;
    padding: 0;
    color: inherit;
    font-weight: 700;
    font-size: 24px;
    &:hover {
        color: #009FFF; 
    }
`;

export default Logo;