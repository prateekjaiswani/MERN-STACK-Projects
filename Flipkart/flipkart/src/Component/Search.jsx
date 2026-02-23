import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/ProductAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  color: black;
  margin-Top: 36px;
`

export default function Search() {

  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const getText = (e) => {
    setText(e);
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <SearchInputBox>
      <SearchInput placeholder='Search Kuch Bhi' onChange={(e) => getText(e.target.value)} value={text} />
      <SearchIconBox><SearchIcon /></SearchIconBox>
      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link to={`product/${product.id}`} onClick={()=>setText('')} style={{color:"inherit", textDecoration: 'none'}}>
                {product.title.longTitle}
              </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchInputBox>
  )
}

const SearchInputBox = styled(Box)`
    width : 38%;
    display: flex;
    background: #fff;
    border-radius: 2px;
    margin-left: 10px;
    
`
const SearchIconBox = styled(Box)`
    color: blue;
    display:flex;
    align-items: center;
`

const SearchInput = styled(InputBase)`
        width:100%;
        height: 36px;
        padding: 5px 20px;
`