import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 90%;
background-color: black;
overflow:hidden;
padding:20px;
@media screen and (max-width:480px){
    padding:10px;
    height: 100px;
}
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* padding:0 20px; */

`

const Menu = styled.ul`
display: flex;
align-items: center;

`

const MenuItems = styled.li`
list-style-type: none;
margin-right: 10px;
color:white;
@media screen and (max-width:480px){
    font-size: 10px;
}
`

const Author = styled.p`
color:white;
@media screen and (max-width:480px){
    font-size: 10px;
}
`

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <MenuItems>Guide</MenuItems>
                    <MenuItems>Support</MenuItems>
                    <MenuItems>API</MenuItems>
                    <MenuItems>Community</MenuItems>
                </Menu>
                <Author>CopyRight@Deepak Kumar Bakki</Author>
            </Wrapper>
        </Container>
    )
}

export default Footer
