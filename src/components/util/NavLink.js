import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled(Link)`
  margin: 0;
  padding: 0;
  color: var(--primary-link-color);
  text-decoration: none;
  &:before {
    content: '>';
  }
`;

const activeStyles = {
  color: '#ff4081',
  paddingBottom: 10,
  fontWeight: 800,
  textDecoration: 'none',
};

const NavLink = ({ children, to }) => (
  <Container to={to} activeStyle={activeStyles}>
    {children}
  </Container>
);

export default NavLink;
