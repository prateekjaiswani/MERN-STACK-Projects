import { Badge, Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/system"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "./LoginDialog";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LoginButton() {
    const [open,setOpen] = useState(false);
    const {account, setAccount} = useContext(DataContext);

    const {cartItems} = useSelector(state=>state.getCart)

    return (
        <LoginBox>
            {
                account ? <Profile account = {account} setAccount ={ setAccount}/>
                :   <LoginnButton variant="contained" onClick={()=>setOpen(true) }>Login</LoginnButton>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

           
            <Container>
                <Link to='cart' style={{textDecoration: 'none', color: 'inherit', display: 'flex' , gap: '10px'}}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon />
                </Badge>
                <Typography>Cart</Typography>
                </Link>
            </Container>
            
        <LoginDialog open ={open} setOpen = {setOpen} />

        </LoginBox>
    )
}

const Container = styled(Box)(({theme})=>({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}))



const LoginBox = styled(Box)(({theme})=>({
    
    display: 'flex',
    margin: '0 3% 0 auto' ,
    '& > *': {
        marginRight: '40px !important',
        fontSize: '14px',
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
    
}))


const LoginnButton = styled(Button)`
        color: #2874f0;
        background: #ffffff;
        text-transform: none;
        border-radius: 2px;
        box-shadow: none;
        font-weight: 600;
        height: 32px;
        padding: 5px 40px;



`
