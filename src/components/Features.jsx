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
@media only screen and (max-width:480px){

margin-bottom: -20px;

}
`

const Left = styled.div`
width: 50%;
display: flex;
justify-content: center;
@media only screen and (max-width:480px){
    display: none;
}
`

const Image = styled.img`
width: 90%;
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
`

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 50%;
@media only screen and (max-width:480px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const Title = styled.span`
width: 90%;
font-size: 60px;
margin-bottom: 20px;
@media only screen and (max-width:480px){
    width: 100%;
    font-size: 30px;
    display: flex;
   justify-content: center;
   margin-bottom: 30px;
   line-height: 10px;
}
`

const SubTitle = styled.span`
width: 90%;
font-style: italic;
font-size: 30px;
@media only screen and (max-width:480px){

    font-size: 15px;
    display: flex;
   justify-content: center;
    
}
`

const Desc = styled.p`
font-size: 15px;
line-height: 20px;
width: 90%;
@media only screen and (max-width:480px){


padding:10px 15px;
font-size: 15px;

}
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
border:none;
margin-top: 10px;
@media only screen and (max-width:480px){

/* display: flex;
justify-content: center; */
margin-left:0px;

}
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
