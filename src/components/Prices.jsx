import React from 'react'
import styled from 'styled-components'
import PriceContent from './PriceContent'

const Container = styled.div`
display: flex;
justify-content: space-around;
margin-top: 50px;
height: 100vh;
`

const Prices = () => {
    return (
        <Container>
            <PriceContent price="10" type="Basic" />
            <PriceContent price="20" type="Premium" />
            <PriceContent price="30" type="Advanced" />

        </Container>
    )
}

export default Prices
