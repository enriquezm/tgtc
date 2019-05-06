import React from 'react'
import styled from 'styled-components'

const ContainerControlled = styled.div`
    margin: 0 auto;
    max-width: 992px;
    display: flex;
`

const Container = ({children}) => (
    <ContainerControlled>
        {children}
    </ContainerControlled>
)

export default Container