import React from 'react'
import styled from 'styled-components'
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';



const Navbar = () => {


    const Container = styled.div`
height:60px ;
background-color: #22262e ;
`
    const Wrapper = styled.div`
    display:flex ;

`

    const Left = styled.div`
flex:1 ;
`
    const Right = styled.div`
    display: flex;
align-items:center ;
flex:1 ;
`
    const Logo = styled.div`
color:white ;
font-weight:bold ;
font-size:30px ;
padding: 7px;

`
    const Emailcontainer = styled.div`
    flex:1;
display: flex;
align-items:center ;
`

    const Phonecontainer = styled.div`
flex:2;
display: flex;
align-items:center ;
`

    const Icon = styled.div`
 margin-right:7px ;
color:white ;
cursor: pointer;
`
    const Text = styled.div`
color:white ;
font-size:15px ;
cursor: pointer;
`

    const Textphone = styled.div`
color:white ;
font-size:15px ;
margin-right:199px ;
`

    return (
        <>

            <Container>
                <Wrapper>
                    <Left>



                        <Logo>
                            SHOPPERS!!
                        </Logo>


                    </Left>

                    <Right>
                        <Emailcontainer>
                            <Icon>

                                <MailOutlineTwoToneIcon fontSize="small" />
                            </Icon>
                            <Text>
                                support_shoppers@gmail.com
                            </Text>
                        </Emailcontainer>
                        <Phonecontainer>
                            <Icon>
                                <LocalPhoneOutlinedIcon fontSize="small" />
                            </Icon>
                            <Textphone>
                                +91 1999 3444 44
                            </Textphone>
                            <Icon>
                                <ExitToAppOutlinedIcon />
                            </Icon>

                            <Icon>
                            </Icon>
                        </Phonecontainer>
                    </Right>
                </Wrapper>


            </Container>


        </>
    )
}

export default Navbar