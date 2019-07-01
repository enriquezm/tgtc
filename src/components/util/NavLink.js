import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled(Link)`
  margin: 0;
  padding: 0;
  color: ${props => (props.onDark ? '#009FFF' : 'inherit')};
  text-decoration: none;
  &:hover {
    color: #009fff;
  }
`;

const activeStyles = {
  color: 'grey',
  paddingBottom: 10,
  borderBottom: '2px solid #7469F4',
};

const NavLink = ({ children, to }) => (
  <Container to={to} activeStyle={activeStyles}>
    {children}
  </Container>
);

export default NavLink;
