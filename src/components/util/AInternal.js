import styled from 'styled-components';
import { Link } from 'gatsby';

const AInternal = styled(Link)`
    margin: 0;
    padding: 0;
    color: ${props => props.onDark ? '#009FFF' : 'inherit'};
    text-decoration: none;
    &:hover {
        color: #009FFF;
        
    }
`;

export default AInternal;