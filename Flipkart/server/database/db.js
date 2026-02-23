import mongoose from 'mongoose';

export const Connection = async (USERNAME, PASSWORD) =>{
    const URL= `mongodb+srv://${USERNAME}:${PASSWORD}@flipkart.ghzpmut.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}