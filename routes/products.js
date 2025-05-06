var express = require('express');
var productRouter = express.Router();
productRouter.get('/', function(req, res) {
    res.json(featuredProducts);
  });

  productRouter.get('/:slug', (req, res) => {
    console.log(req.params, "hello")
    const product = featuredProducts.find(p => p.slug === req.params.slug);
    
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  });

const featuredProducts = [
    {
      id: 1,
      name: "White Shirt",
      price: 50,
      slug: "white-shirt",
      description: "Affordable Shirt, perfect for cool weather",
      image: [
        "https://images.pexels.com/photos/2403586/pexels-photo-2403586.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 2,
      name: "Wrist Watch",
      price: 400,
      slug: "wrist-watch",
      description: "Luxury watch, perfect for Odogwu's",
      image: [
        "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      id: 3,
      name: "Monostrap",
      price: 40,
      slug: "monostrap",
      description: "Beautiful monostrap, perfect for hot weather",
      image: [
        "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/5181087/pexels-photo-5181087.jpeg?auto=compress&cs=tinysrgb&w=400",
      ],
    },
    {
      id: 4,
      name: "Wigssss",
      price: 40,
      slug: "wigs",
      description: "Beautiful monostrap, perfect for hot weather",
      image: [
        "https://images.pexels.com/photos/5325912/pexels-photo-5325912.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/3615457/pexels-photo-3615457.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
    },
    {
        id: 5,
        name: "White Shirtt",
        price: 50,
        slug: "white-shirtt",
        description: "Affordable Shirt, perfect for cool weather",
        image: [
          "https://images.pexels.com/photos/2403586/pexels-photo-2403586.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg?auto=compress&cs=tinysrgb&w=400",
        ],
      },
      {
        id: 6,
        name: "Wrist Watchh",
        price: 400,
        slug: "white-shirttt",
        description: "Luxury watch, perfect for Odogwu's",
        des: "desc from 6th wristwatc",
        image: [
          "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=400",
          "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
   
  ];

  

  module.exports = productRouter;