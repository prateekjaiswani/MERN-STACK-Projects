import { styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const Image = styled('img')(({theme})=>({
    width: '100%',
    height: 200,
    [theme.breakpoints.down('md')]:{
        objectFit: 'cover',
        height: 180
    }
}));


export default function Banner() {
  const bannerData = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/139cf181d98cdf97.jpg?q=50",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
    },
    {
      id: 4,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
    },
    {
      id: 5,
      url: "https://rukminim1.flixcart.com/flap/3760/560/image/75a15c3e19c3f7de.jpg?q=50",
    },
    {
      id: 6,
      url: "  https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/ddaef47f22efd6a7.jpeg?q=50",
    },
    
    {
      id: 7,
      url: "  https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/ff810994eab08965.jpg?q=50",
    },
  ];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <Carousel responsive={responsive}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    swipeable={false}
  draggable={false}
  autoPlay={true}
  autoPlaySpeed={2000}
  slidesToSlide={1}
  infinite={true}>
        {
            bannerData.map(data => (
                    <Image src={data.url} alt="Banner"/>
            ))
        }
      </Carousel>
  )
}

