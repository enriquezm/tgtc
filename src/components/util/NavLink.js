import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled(Link)`
  margin: 0;
  padding: 0;
  color: #b4bac3;
  text-decoration: none;
  &:hover {
    color: #009fff;
  }
`;

const activeStyles = {
  color: 'white',
  paddingBottom: 10,
  borderBottom: '2px solid #ED3D63',
};

const NavLink = ({ children, to }) => (
  <Container to={to} activeStyle={activeStyles}>
    {children}
  </Container>
);

export default NavLink;
