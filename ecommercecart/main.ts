import { ECommerceService } from './services/ecommerce.service';

const service = new ECommerceService();

service.viewProducts();

service.addToCart("Laptop", 1);
service.addToCart("Jeans", 2);
service.addToCart("Rice Bag", 1);

service.removeFromCart("Jeans");

service.displayCart();

service.viewProducts();
