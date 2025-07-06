import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';
import { Category } from '../models/category.enum';

export class ECommerceService {
    private products: Product[] = [
        { id: 1, name: 'Laptop', category: Category.Electronics, price: 45000, stock: 3 },
        { id: 2, name: 'Jeans', category: Category.Clothing, price: 1500, stock: 10 },
        { id: 3, name: 'Rice Bag', category: Category.Grocery, price: 700, stock: 5 }
    ];

    private cart: CartItem[] = [];

    viewProducts(): void {
        console.log("Available Products:");
        for (const product of this.products) {
            console.log(`${product.name} | ₹${product.price} | In Stock: ${product.stock} | Category: ${product.category}`);
        }
        console.log();
    }

    addToCart(productName: string, quantity: number): void {
        const product = this.products.find(p => p.name === productName);
        if (!product) {
            console.log(`${productName} not found.`);
            return;
        }
        if (product.stock < quantity) {
            console.log(`Cannot add ${quantity} x ${productName}. Only ${product.stock} in stock.`);
            return;
        }

        let cartItem = this.cart.find(ci => ci.product.name === productName);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            this.cart.push({ product, quantity });
        }

        product.stock -= quantity;
        console.log(`${quantity} x ${productName} added to cart.\n`);
    }

    removeFromCart(productName: string): void {
        const index = this.cart.findIndex(ci => ci.product.name === productName);
        if (index === -1) {
            console.log(`${productName} is not in the cart.`);
            return;
        }

        const cartItem = this.cart[index];
        cartItem.product.stock += cartItem.quantity;
        this.cart.splice(index, 1);

        console.log(`${productName} removed from cart.\n`);
    }

    displayCart(): void {
        console.log("Cart Summary:");
        let total = 0;
        for (const item of this.cart) {
            console.log(`${item.product.name} - ₹${item.product.price} x ${item.quantity}`);
            total += item.product.price * item.quantity;
        }

        console.log(`Total: ₹${total}`);

        let discount = 0;
        if (total >= 10000) discount = 0.15;
        else if (total >= 5000) discount = 0.10;

        const discountedTotal = total - (total * discount);
        if (discount > 0) {
            console.log(`Discounted Total: ₹${discountedTotal}`);
        }
        console.log();
    }
}
