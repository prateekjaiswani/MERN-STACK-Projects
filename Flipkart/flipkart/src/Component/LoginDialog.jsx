import { Button, Dialog, TextField, Typography } from '@mui/material'
import { Box, flexbox, styled } from '@mui/system';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { authenticateLogin, authenticateSignup } from '../service/api';





export default function LoginDialog({ open, setOpen }) {

    const signUpInitialValues = {
        firstname : "",
        lastname : "",
        username : "",
        email : "",
        password : "",
        number: ""
    }

    const loginInitialValues = {
        email : "",
        password : ""
    }

    const accountinitialvalues = {
        login  : {
            view: 'login',
            Heading:"Login",
            subHeading:"Get access to your Orders, Wishlist and Recommendations"
        },
        signup  : {
            view: 'signup',
            Heading:"Looks like you're new here!",
            subHeading:"Sign up with your mobile number to get started"
        }
    }
    const [account, toggleAccount] = useState(accountinitialvalues.login);

    const [signup,setSignup] = useState(signUpInitialValues);
    const [login, setLogin] = useState(loginInitialValues); 

    const {setAccount} = useContext(DataContext);

    const onInputChange=(e)=>{
        setSignup({...signup, [e.target.name]: e.target.value });
        // console.log(signup);
    }

    const onLoginChange = (e) => {
        setLogin({...login,[e.target.name]:e.target.value})
    }

    const signupData = async () => {
      let response = await authenticateSignup(signup);
        if(!response) return;

        setOpen(false);
        toggleAccount(accountinitialvalues.login);
        setAccount(signup.firstname);

    //   console.log(response.message);
    }

    const loginData = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
          if(!response) return ;
  
          setOpen(false);
          toggleAccount(accountinitialvalues.login);
          setAccount(await response.data.message.firstname);
  
      //   console.log(response.message);
      }
    

    return (
        <Dialog open={open} onClose={() => {setOpen(false); toggleAccount(accountinitialvalues.login)}} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%', width: '100%' }}>
                    <Image>
                        <Typography variant='h5' style={{ marginTop: 20, marginLeft: 20 }}>{account.Heading}</Typography>
                        <Typography style={{ marginTop: 30, marginLeft: 20 }}>{account.subHeading}</Typography>
                    </Image>

                    {
                        account.view === 'login' ? 
                            <Wrapper>
                                <TextField onChange={(e)=>onLoginChange(e)} name = "email" variant="standard" label="Enter Email/Phone Number" />
                                <TextField onChange={(e)=>onLoginChange(e)} name = "password" variant="standard" label="Enter Password" />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={()=>loginData()}>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>Or</Typography>
                                <RequestButton> Request OTP</RequestButton>
                                <CreateAccount onClick={()=>toggleAccount(accountinitialvalues.signup)} >New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="Enter FirstName" />
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Enter LastName" />
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="email" label="Enter Email" /> 
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="number" label="Enter Phone Number" />
                                
                                <LoginButton onClick={()=>signupData()} > Continue </LoginButton>
                                
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}


const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`
const Image = styled(Box)`
    background: #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat ;
    height: 100%;
    width:35%;
    
    & > p, & > h5 {
        color: white;
        font-weight: 600;
    }
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    
    padding: 25px 35px;
    flex:1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`

    text-transform: none;
    background: #fb641b;
    color: white;
    height: 48px;
    border-radius: 2px;
`

const RequestButton = styled(Button)`
    text-transform: none;
    background: white;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`

const Text = styled(Typography)`
    font-size: 12px;
    font-color: #878787;
`

const CreateAccount = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #2874f0;
    cursor: pointer;
`