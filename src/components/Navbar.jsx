import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:90px;
`
const Wrapper = styled.div`
padding: 0px 20px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 20px;

@media only screen and (max-width:480px){
display: flex;
flex-direction: column;
justify-content: space-between;
}
`
const Logo = styled.h1`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 30px;
cursor: pointer;
@media only screen and (max-width:480px){
    text-align: center;
    margin-bottom: 30px;
}

`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
@media only screen and (max-width:480px){
display: none;
}
`
const MenuItems = styled.li`
margin-right: 20px;
font-size: 25px;
list-style-type: none;
color:gray;
align-items: center;
cursor: pointer;
`
const LogoImg = styled.div`
text-decoration: underline crimson;
`

const Button = styled.button`
border:2px solid white;
padding:10px 20px;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
background-color: crimson;
color:white;
font-size: 15px;
align-items: center;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <LogoImg>
                        MILLINIEAL'S <br></br>CLUB
                    </LogoImg>

                    <Menu>
                        <MenuItems>Home</MenuItems>
                        <MenuItems>About</MenuItems>
                        <MenuItems>Projects</MenuItems>
                        <MenuItems>Products</MenuItems>
                        <MenuItems>Services</MenuItems>
                    </Menu>
                </Logo>
                <Button>
                    JOIN TODAY
                </Button>
            </Wrapper>



        </Container>
    )
}

export default Navbar
