
import Product from "../model/product-schema.js"



export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.status(200).json( products );
        
    } catch (error) {
        response.status(500).json(error.message);
    }

}

export const getProductDetails = async (request,response) =>{
    try {
        const product = await Product.findOne({id: request.params.id});
        response.status(200).json(product);
        // console.log(product)
    } catch (error) {
        response.status(500).json(error.message)
    }
}