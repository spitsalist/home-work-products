const express = require("express")
const products = require('./products')

const router = express.Router()

router.get('/',(req, res) => {
    res.send('<h1>Home Page</h1>')
})

router.get('/product',(req, res)=> {
    try {
        res.json(products)

    }catch(err){
        console.log('Error', err)
    }
})

router.post('/product',(req, res)=> {
    try {
       const productName = req.query.name || req.body.name
        const productPrice = req.query.price || req.body.price
        if(!productName || !productPrice){
            return res.status(400).json({message: 'Please enter both name and price'})
        }
        const newProduct = {id: products.length +1, name: productName, price: productPrice}
        products.push(newProduct)
        res.send(`Product created: ${productName}, Product price: ${productPrice}`)

    }catch(err){
        res.status(500).send({message: 'Internal Server Error'})
    }
})

module.exports = router