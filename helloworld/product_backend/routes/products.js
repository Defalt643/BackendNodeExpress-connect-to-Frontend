var express = require('express');
const res = require('express/lib/response');
const { response } = require('../app');
var router = express.Router();
const products = [
  { id: 1, name: 'Ipad gen1 64G Wifi', price: 11000.0 },
  { id: 2, name: 'Ipad gen2 64G Wifi', price: 12000.0 },
  { id: 3, name: 'Ipad gen3 64G Wifi', price: 13000.0 },
  { id: 4, name: 'Ipad gen4 64G Wifi', price: 14000.0 },
  { id: 5, name: 'Ipad gen5 64G Wifi', price: 15000.0 },
  { id: 6, name: 'Ipad gen6 64G Wifi', price: 16000.0 },
  { id: 7, name: 'Ipad gen7 64G Wifi', price: 17000.0 },
  { id: 8, name: 'Ipad gen8 64G Wifi', price: 18000.0 },
  { id: 9, name: 'Ipad gen9 64G Wifi', price: 19000.0 },
  { id: 10, name: 'Ipad gen10 64G Wifi', price: 20000.0 }
]
let lastId = 11
const getProducts = function (req, res, next) {
  res.json(products)
}

const getProduct = function (req, res, next) {
  const index = products.findIndex(function (item) {
    return item.id === parseInt(req.params.id)
  })
  if(index >= 0){
    res.json(products[index])
  }else{
    res.status(404).json({
      code:404,
      msg:'not found Product Id '+req.params.id
    })
  }
}


const addProducts = function (req, res, next) {
  const newProduct = {
    id: lastId,
    name: req.body.name,
    price: parseFloat(req.body.price)
  }
  products.push(newProduct)
  lastId++
  res.status(201).json(newProduct)
  
}

const updateProduct = function (req, res, next){
  const productId = parseInt(req.body.id)
  const product = {
    id: productId,
    name: req.body.name,
    price: parseFloat(req.body.price)
  }
  const index = products.findIndex(function(item){
    return item.id = productId
  })
  if(index >= 0){
    products[index] = product 
    res.json(products[index])
  }else{
    res.status(404).json({
      code: 404,
      mag: 'not found product id '+ req.body.id
    })
  }
}

const deleteProduct = function (req, res, next){
  const productId = parseInt(req.params.id)
  const index = products.findIndex(function (item) {
    return item.id === productId
  })
  if(index >= 0){
    products.splice(index, 1)
    res.status(200).send()
  }else{
    res.status(404).json({
      code: 404,
      mag: 'not found product id '+ req.params.id
    })
  }
}

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', addProducts)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;
