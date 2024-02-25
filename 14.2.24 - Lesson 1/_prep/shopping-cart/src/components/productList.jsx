class Product {
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
}

const ProductList = () => {
    const products = [
        new Product(1, "TV", 44),
        new Product(2, "Table", 99)
    ];

    return ( 
        <div>
            { products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            )) }
        </div>
     );
}
 
export default ProductList;