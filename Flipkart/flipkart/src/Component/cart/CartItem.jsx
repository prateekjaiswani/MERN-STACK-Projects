import { Button, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/CartAction'
import { addEllipsis } from '../../utils/common-utils'
import {  GroupedButton } from './ButtonGroup'

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff;
`

const LeftComponent =  styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px
`

const RemoveButton = styled(Button)`
    margin-top: 39px;
    color: #000;
    font-weight: 600


`

export const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch= useDispatch()

    

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

  return (
    <Component>
        <LeftComponent>
            <img src={item.url} alt="product"  style={{height: 110}}/>
            <GroupedButton/>
        </LeftComponent>
        <Box>
            <Typography>{addEllipsis(item.title.longTitle)} </Typography>
            <SmallText>Seller: RetailNet
                <Box component='span'><img src={fassured} alt='flipkart' style={{width: 50, marginLeft: 10}} /></Box>
            </SmallText>
            <Typography style={{margin: '20px 0'}}>
                <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box> &nbsp;
                <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box> &nbsp;
                <Box component="span" style={{ color: "388e3c" }}>{item.price.discount}</Box>
            </Typography>
            <RemoveButton onClick={()=>removeItemFromCart(item.id)}>Remove</RemoveButton>
        </Box>
    </Component>
  )
}
