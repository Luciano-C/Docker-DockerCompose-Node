import express from 'express'
import mongoose from 'mongoose'


const app = express();

const dbConnect = async() => {
    const db = await mongoose.connect("mongodb://mymongo/testdb");
    console.log(db.connection.db.databaseName)
}

dbConnect();

const ProductSchema = new mongoose.Schema({
    name: String
});

const ProductModel = mongoose.model("Product", ProductSchema);

app.get('/', async(req, res) => {
    
    const newProduct = await ProductModel.create({
        name: "Laptop"
    })
    
    
    res.json({
        newProduct
    })
});


app.listen(3000);
console.log('Server on port 3000');