import React from 'react';
import {GitHub, Linkedin, Mail} from 'react-feather';
import styled from 'styled-components';
import Form from './util/Form';
import P from './util/P';

const ContainerFluid = styled.section`
    background: #554d60;
    color: white;
`;

const ContainerFixed = styled.section`
    max-width: 992px;
    margin: 0 auto;
    padding: 3% 0;
    text-align: center;
    h3 {
        margin-bottom: 50px;
    }
`
const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            color: #eeedef;
        }
    }
`;

const Contact = () => (
    <ContainerFluid>
        <ContainerFixed>
            <h3>Get in touch</h3>
            <P align="center" color="white">Have a job opportunity, idea, or want to collaborate? Shoot me a message!</P>
            <Row>
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
            </Row>
            <Form />
        </ContainerFixed>
    </ContainerFluid>
)

export default Contact