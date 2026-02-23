import express from 'express';
import logincontroller from '../controller/logincontroller.js';
import { addPaymentGateway } from '../controller/payment-controller.js';
import { getProducts, getProductDetails } from '../controller/product-controller.js';
import usercontroller from '../controller/usercontroller.js';

const router = express.Router();

router.post('/signup' , usercontroller);
router.post('/login' , logincontroller);

router.get('/product', getProducts);
router.get('/product/:id', getProductDetails );

router.post('/payment', addPaymentGateway);

export default router;