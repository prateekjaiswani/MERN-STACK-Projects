import { styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(LocalOfferIcon)`
            margin-right: 10px;
            color: #00cc00;
            font-size: 15px;
            
    `

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;

    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

export const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date= new Date(new Date().getTime() + (5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
                8 ratings & 1 reviews
                <Box component="span" ><img src={fassured} style={{ marginLeft: 20, width: 77 }} alt="assured" /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box> &nbsp;
                <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box> &nbsp;
                <Box component="span" style={{ color: "388e3c" }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Special PriceGet extra 15% off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography><StyledBadge/>Purchase now & get a surprise cashback coupon for January / February 2023Know More</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Warranty</TableCell>
                        <TableCell style={{fontWeight: 600}}> No Warranty </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Seller</TableCell>
                        <TableCell> 
                        <Box component="span"  style={{fontWeight: 600}}>SuperComNet</Box> 
                        <Typography>GST invoice Available</Typography>
                        <Typography> View more Sellers Starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width: 390}} alt="flipkartpoints" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Description</TableCell>
                        <TableCell> {product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}
