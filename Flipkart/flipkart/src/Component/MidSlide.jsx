import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'


const Component = styled(Box)`
    display: flex;
    align-items: center;
    gap: 5px;
`
const LeftComponent= styled(Box)(({theme})=>({
    width:  '83%',
    [theme.breakpoints.down('md')]:{
        width: '100%'
    }

}));

const RightComponent= styled(Box)(({theme})=>({
    padding: 5,
    background: "#ffffff",
    width: '17%',
    textAlign : 'center ',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

export const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />

            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt='ad' style={{width: "217px"}} />
            </RightComponent>
        </Component>
    )
}

export default MidSlide;