import { AppBar, Toolbar, styled, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import Search from "./Search";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


const MenuButton = styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]: {
        display:'block'
    }
}))




const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen]= useState(false)


    const handleOpen =() =>{
        setOpen(true)
    }
    const handleClose =() =>{
        setOpen(false)
    }

    const list = () => (
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <LoginButton/>
                </ListItem>
            </List>
        </Box>
    )


    return (
        <StyledHeader>
            <NavBar>
            <MenuButton color="inherit" onClick={handleOpen}>
                <MenuIcon/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                  {list()}
            </Drawer>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <StyledBox>
                        <img src={logoURL} style={{ width: 75 }} alt="logo" />
                        <Box>
                            <Subheading>
                                Explore&nbsp;<Plus component="span" style={{ color: '#FFE500', }}>Plus&nbsp;</Plus>
                                <img src={subURL} style={{ width: 10, height: 10 }} alt="flipkart" />
                            </Subheading>
                        </Box>
                    </StyledBox>
                </Link>
                <Search />
                <CustomButtonWrapper>
                    <LoginButton />
                </CustomButtonWrapper>
            </NavBar>
        </StyledHeader>
    )
}

const StyledHeader = styled(AppBar)`
    background:#2874F0;
    height: 55px
`;

const StyledBox = styled(Box)`
    margin-left: 100px;
    line-height:0;
`;

const Subheading = styled(Typography)`
    font-style: italic;
    display: flex;
    flex-direction:row;
    font-size: 10px;
`
const Plus = styled(Box)`
    font-size: 9px;
    font-style: italic;
    color: yellow;
`

const NavBar = styled(Toolbar)`
    display: flex;
    flex-direction: Row;
    align-items: center;
`

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: "0 5% 0 auto",
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

export default Header;

