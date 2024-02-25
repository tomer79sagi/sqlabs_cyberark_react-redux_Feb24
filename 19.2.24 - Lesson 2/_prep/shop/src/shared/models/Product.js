export default class Product {
    id;
    name;
    description;
    imageUrl;
    price;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Method to update fields based on input name and value
    updateField(fieldName, value) {
        if (Object.hasOwnProperty.call(this, fieldName)) {
            this[fieldName] = value;
        }
    }

      // Validate form inputs
    validate() {
        let errors = {};

        // Name validation
        if (!this.name) {
            errors["name"] = "Product name cannot be empty";
        }

        // Price validation
        if (!this.price) {
            errors["price"] = "Price cannot be empty";
        } else if (isNaN(this.price) || Number(this.price) <= 0) {
            errors["price"] = "Price must be a positive number";
        }

        return errors;
    }
}

export const PRODUCTS = [
    { id: 1, name: 'Product 1', price: 10.0, quantity: 10, image_url: 'https://example.com/product1.jpg' },
    { id: 2, name: 'Product 2', price: 17.5, quantity: 12, image_url: 'https://example.com/product2.jpg' },
    { id: 3, name: 'Product 3', price: 25.0, quantity: 14, image_url: 'https://example.com/product3.jpg' },
    { id: 4, name: 'Product 4', price: 25.0, quantity: 16, image_url: 'https://example.com/product4.jpg' },
    { id: 5, name: 'Product 5', price: 32.5, quantity: 18, image_url: 'https://example.com/product5.jpg' },
    { id: 6, name: 'Product 6', price: 40.0, quantity: 20, image_url: 'https://example.com/product6.jpg' },
    { id: 7, name: 'Product 7', price: 40.0, quantity: 22, image_url: 'https://example.com/product7.jpg' },
    { id: 8, name: 'Product 8', price: 47.5, quantity: 24, image_url: 'https://example.com/product8.jpg' },
    { id: 9, name: 'Product 9', price: 55.0, quantity: 26, image_url: 'https://example.com/product9.jpg' },
    { id: 10, name: 'Product 10', price: 55.0, quantity: 28, image_url: 'https://example.com/product10.jpg' },
    { id: 11, name: 'Product 11', price: 62.5, quantity: 30, image_url: 'https://example.com/product11.jpg' },
    { id: 12, name: 'Product 12', price: 70.0, quantity: 32, image_url: 'https://example.com/product12.jpg' },
    { id: 13, name: 'Product 13', price: 70.0, quantity: 34, image_url: 'https://example.com/product13.jpg' },
    { id: 14, name: 'Product 14', price: 77.5, quantity: 36, image_url: 'https://example.com/product14.jpg' },
    { id: 15, name: 'Product 15', price: 85.0, quantity: 38, image_url: 'https://example.com/product15.jpg' },
    { id: 16, name: 'Product 16', price: 85.0, quantity: 40, image_url: 'https://example.com/product16.jpg' },
    { id: 17, name: 'Product 17', price: 92.5, quantity: 42, image_url: 'https://example.com/product17.jpg' },
    { id: 18, name: 'Product 18', price: 100.0, quantity: 44, image_url: 'https://example.com/product18.jpg' },
    { id: 19, name: 'Product 19', price: 100.0, quantity: 46, image_url: 'https://example.com/product19.jpg' },
    { id: 20, name: 'Product 20', price: 107.5, quantity: 48, image_url: 'https://example.com/product20.jpg' }
  ];