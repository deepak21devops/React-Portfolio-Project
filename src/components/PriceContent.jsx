import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 100%;
margin-top: 70px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
padding: 25px;
height: 70vh;
border-radius: 10px;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
`

const PriceTag = styled.div`

`
const Price = styled.span`
font-size: 60px;
font-weight: bold;
`
const Button = styled.button`
border:2px solid crimson;
padding:15px 20px;
border-radius: 30px;
margin-top: 20px;
color: crimson;
cursor: pointer;
font-weight: bold;
`

const Menu = styled.ul`
list-style-type: none;
`

const MenuItems = styled.li`
line-height: 40px;
font-size: 20px;
`

const JoinBtn = styled.button`
padding:15px 20px;
background-color: darkblue;
color: white;
border-radius: 15px;
font-weight: bold;
border:none;
cursor: pointer;
`



const PriceContent = (props) => {
    return (
        <Container>
            <Wrapper>
                <PriceTag>
                    $<Price>{props.price}</Price>/Month
                </PriceTag>
                <Button>{props.type}</Button>
                <Menu>
                    <MenuItems>200 Handicarft Templates</MenuItems>
                    <MenuItems>Exclusive Support</MenuItems>
                    <MenuItems>50+ Pre Built Services</MenuItems>
                    <MenuItems>Premium Plugins</MenuItems>
                </Menu>
                <JoinBtn>Join Now</JoinBtn>
            </Wrapper>
        </Container>
    )
}

export default PriceContent
