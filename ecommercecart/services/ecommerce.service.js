"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceService = void 0;
var category_enum_1 = require("../models/category.enum");
var ECommerceService = /** @class */ (function () {
    function ECommerceService() {
        this.products = [
            { id: 1, name: 'Laptop', category: category_enum_1.Category.Electronics, price: 45000, stock: 3 },
            { id: 2, name: 'Jeans', category: category_enum_1.Category.Clothing, price: 1500, stock: 10 },
            { id: 3, name: 'Rice Bag', category: category_enum_1.Category.Grocery, price: 700, stock: 5 }
        ];
        this.cart = [];
    }
    ECommerceService.prototype.viewProducts = function () {
        console.log("Available Products:");
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            console.log("".concat(product.name, " | \u20B9").concat(product.price, " | In Stock: ").concat(product.stock, " | Category: ").concat(product.category));
        }
        console.log();
    };
    ECommerceService.prototype.addToCart = function (productName, quantity) {
        var product = this.products.find(function (p) { return p.name === productName; });
        if (!product) {
            console.log("".concat(productName, " not found."));
            return;
        }
        if (product.stock < quantity) {
            console.log("Cannot add ".concat(quantity, " x ").concat(productName, ". Only ").concat(product.stock, " in stock."));
            return;
        }
        var cartItem = this.cart.find(function (ci) { return ci.product.name === productName; });
        if (cartItem) {
            cartItem.quantity += quantity;
        }
        else {
            this.cart.push({ product: product, quantity: quantity });
        }
        product.stock -= quantity;
        console.log("".concat(quantity, " x ").concat(productName, " added to cart.\n"));
    };
    ECommerceService.prototype.removeFromCart = function (productName) {
        var index = this.cart.findIndex(function (ci) { return ci.product.name === productName; });
        if (index === -1) {
            console.log("".concat(productName, " is not in the cart."));
            return;
        }
        var cartItem = this.cart[index];
        cartItem.product.stock += cartItem.quantity;
        this.cart.splice(index, 1);
        console.log("".concat(productName, " removed from cart.\n"));
    };
    ECommerceService.prototype.displayCart = function () {
        console.log("Cart Summary:");
        var total = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("".concat(item.product.name, " - \u20B9").concat(item.product.price, " x ").concat(item.quantity));
            total += item.product.price * item.quantity;
        }
        console.log("Total: \u20B9".concat(total));
        var discount = 0;
        if (total >= 10000)
            discount = 0.15;
        else if (total >= 5000)
            discount = 0.10;
        var discountedTotal = total - (total * discount);
        if (discount > 0) {
            console.log("Discounted Total: \u20B9".concat(discountedTotal));
        }
        console.log();
    };
    return ECommerceService;
}());
exports.ECommerceService = ECommerceService;
