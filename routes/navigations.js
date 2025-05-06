var express = require('express');
var navigationsRouter = express.Router();
navigationsRouter.get('/', function(req, res) {
    res.json(navigations);
  });
const navigations = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Products",
      url: "/products",
      category : [
        {
          title: "Men",
          url: "/products/men"
        },
        {
          title: "Women",
          url: "/products/women"
        },
        {
  
          title: "Electronics",
          url: "/products/electronics",
          category: [
            {
              title: "Iphones",
              url : "/products/electronics/iphones"
            },
            {
              title: "Laptops",
              url : "/products/electronics/laptops"
            },
          ]
  
        }
      
      ]
    },
    {
      title: "Services",
      url: "/services",
      category: [
        {
          title: "Same Day Delivery",
          url: "/services/same-day-delivery"
        },
        {
          title: "Free Shipping",
          url: "/services/free-shipping"
        }
      ]
    }
  
  ]

  module.exports = navigationsRouter;

  