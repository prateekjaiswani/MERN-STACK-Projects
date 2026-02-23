import { Box, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/ProductAction'
import Slide from './Slide'
import MidSlide from './MidSlide'
import { MidSection } from './MidSection'

export default function Home() {
const { products } = useSelector(state=>state.getProducts);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for you" timer={false}/>
        <Slide products={products} title="Suggested for you" timer={false}/>
        <Slide products={products} title="Top selection" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's top picks" timer={false}/>
        <Slide products={products} title="Top Deals on Accessories" timer={false}/>
      </Container>

    </>
  )
}

const Container = styled(Box)`
        padding: 10px;
        background : #f2f2f2;
`