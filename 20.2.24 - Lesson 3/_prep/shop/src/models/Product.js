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
    new Product(1, "Laptop Pro", 1500, 25, "https://example.com/products/laptop-pro.jpg"),
    new Product(2, "Smartphone X", 999, 50, "https://example.com/products/smartphone-x.jpg"),
    new Product(3, "Tablet Advanced", 600, 30, "https://example.com/products/tablet-adv.jpg"),
    new Product(4, "Smartwatch 2", 299, 40, "https://example.com/products/smartwatch2.jpg"),
    new Product(5, "Wireless Earbuds", 129, 60, "https://example.com/products/earbuds.jpg"),
    new Product(6, "Gaming Console", 499, 15, "https://example.com/products/console.jpg"),
    new Product(7, "4K Television", 800, 20, "https://example.com/products/4ktv.jpg"),
    new Product(8, "Bluetooth Speaker", 199, 80, "https://example.com/products/speaker.jpg"),
    new Product(9, "E-Reader", 130, 45, "https://example.com/products/ereader.jpg"),
    new Product(10, "Laptop Lite", 800, 30, "https://example.com/products/laptop-lite.jpg"),
    new Product(11, "Smartphone Mini", 700, 55, "https://example.com/products/smartphone-mini.jpg"),
    new Product(12, "Tablet Basic", 300, 25, "https://example.com/products/tablet-basic.jpg"),
    new Product(13, "Fitness Tracker", 59, 70, "https://example.com/products/tracker.jpg"),
    new Product(14, "Noise Cancelling Headphones", 350, 65, "https://example.com/products/headphones.jpg"),
    new Product(15, "Portable Charger", 25, 100, "https://example.com/products/charger.jpg"),
    new Product(16, "Digital Camera", 1200, 10, "https://example.com/products/camera.jpg"),
    new Product(17, "Action Camera", 250, 50, "https://example.com/products/actioncam.jpg"),
    new Product(18, "Smart Home Hub", 99, 40, "https://example.com/products/smarthome.jpg"),
    new Product(19, "Drone", 750, 15, "https://example.com/products/drone.jpg"),
    new Product(20, "VR Headset", 399, 20, "https://example.com/products/vrheadset.jpg")
  ];