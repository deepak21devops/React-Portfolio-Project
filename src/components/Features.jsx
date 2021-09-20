import React from 'react'
import styled from 'styled-components'
import girl from '../images/angel.png'
const Container = styled.div`

margin-top: 80px;
`
const Wrapper = styled.div`
display: flex;

justify-content: center;
align-items: center;
`

const Left = styled.div`
width: 50%;
display: flex;
justify-content: center;
`

const Image = styled.img`
width: 90%;
`

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 50%;
`
const Title = styled.span`
width: 90%;
font-size: 60px;
margin-bottom: 20px;
`

const SubTitle = styled.span`
width: 90%;
font-style: italic;
font-size: 30px;
`

const Desc = styled.p`
font-size: 15px;
line-height: 20px;
width: 90%;
`

const Button = styled.button`
padding: 15px 20px;
border-radius: 20px;
background-color: darkblue;
color: white;
font-weight: bold;
font-size: 15px;
cursor: pointer;
margin-left:-480px;
display: flex;
border:none
`

const Features = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Image src={girl} />
                </Left>
                <Right>
                    <Title><strong>Fashion</strong> <italic>Gives</italic><br></br></Title>
                    <Title><strong>Fashion</strong> <italic>Rulzz</italic><br></br></Title>
                    <SubTitle>We Know that Fashion is good business</SubTitle>
                    <Desc>We Help out Clients in the Fashion Industry to get the top most
                        models and bring out true passion among them.
                        We Help out Clients in the Fashion Industry to get the top most
                        models and bring out true passion among them.</Desc>
                    <Desc>We Help out Clients in the Fashion Industry to get the top most
                        models and bring out true passion among them.</Desc>
                    <Button>Learn More</Button>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Features
