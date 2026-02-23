import { products } from "./constants/Data.js"
import  Product  from "./model/product-schema.js";

const DefaultData = async ()=> {
    try {
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data Imported Sucefully");
    } catch (error) {
        console.log(error.message);
    }
}

export default DefaultData;