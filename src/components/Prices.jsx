import React from 'react'
import styled from 'styled-components'
import PriceContent from './PriceContent'

const Container = styled.div`
display: flex;
justify-content: space-around;
margin-top: 50px;
height: 100vh;

@media screen and (max-width:480px){
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 1000px;
    margin-top: 20px;
}
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
