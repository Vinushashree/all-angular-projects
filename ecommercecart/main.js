"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ecommerce_service_1 = require("./services/ecommerce.service");
var service = new ecommerce_service_1.ECommerceService();
service.viewProducts();
service.addToCart("Laptop", 1);
service.addToCart("Jeans", 2);
service.addToCart("Rice Bag", 1);
service.removeFromCart("Jeans");
service.displayCart();
service.viewProducts();
