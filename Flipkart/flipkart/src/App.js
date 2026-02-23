
import Header from './Component/Header';
import Home from './Component/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailView } from './Component/details/DetailView';
import { Cart } from './Component/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
       <Header/>
       <Box style={{marginTop: 50}}>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/product/:id' element={<DetailView/>}/>
         <Route path='/cart' element={<Cart/>}/>
        </Routes>
       </Box>
      </BrowserRouter>
    </DataProvider>
   
  )
}

export default App;
