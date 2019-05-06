import React from 'react'
import { Link } from 'gatsby'
import {GitHub, Linkedin, Mail} from 'react-feather'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Contact = () => (
  <Container>
    <a href="mailto:enri.myles@gmail.com">
        <Mail />
        <p>Email</p>
    </a>
    <a href="https://www.linkedin.com/in/mylesenriquez/">
        <Linkedin />
        <p>LinkedIn</p>
    </a>
    <a href="https://github.com/enriquezm">
        <GitHub />
        <p>Github</p>
    </a>
  </Container>
)

export default Contact