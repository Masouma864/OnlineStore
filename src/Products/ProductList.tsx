import React, { useState } from 'react';

interface ProductListProps {

}
interface Product {
    id: string;
    title: string;
    price: number;
}
const initialProducts: Product[] = [
    { id: '1f', title: 'Scape ', price: 100 },
    { id: '2f', title: 'Hunter', price: 200 },
    { id: '3f', title: 'War', price: 300 },
]
const ProductList: React.FC<ProductListProps> = ({}) => {
    const [Products, setProducts] = useState<Product[]>(initialProducts);

    return (
        <div>
            <label htmlFor=""> Games List</label>
            {Products.map((product) => <div key={product.id}>
                <span >{`${product.title} : ${product.price}`}</span>
            </div>)}

            <button onClick={() => setProducts(prevProducts => [{
                id: '4f',
                title: 'Half Life',
                price: 101
            }, ...prevProducts]
            )}>Add Game</button>
        </div >
    );
};

export default ProductList;