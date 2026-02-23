import { Box, styled, Typography } from '@mui/material';
import React from 'react'

export default function Navbar() {
    const navData = [
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100', text: 'Top Offers' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Grocery' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', text: 'Appliances' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', text: 'Travel' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty, Toys & More' }
    ];

  
    return (
        <Box style={{background: `#fff`}}>

        <NavBarBox>
            {
                navData.map((data,i) => (
                    <Item key={i}>
                        <img src={data.url} alt="nav" style={{width: 60}} />
                        <Typography>{data.text}</Typography>
                    </Item>
                ))
            }
        </NavBarBox>
            </Box>
    )

    
}

const NavBarBox = styled(Box)(({theme})=>({

    border : "solid 1px black",
    
    display : "flex",
    justifyContent: "space-between",
    padding: "3px 130px",
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }

}))




const Item = styled(Box)`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;

`;