import React  from 'react';
import { useSelector } from 'react-redux';
import { getProductsSelector } from './products.slice';
import { Product } from './products.slice'; 

interface ProductListProps {

}

const ProductList: React.FC<ProductListProps> = ({ }) => {
    const products = useSelector(getProductsSelector);

    return (
        <div>
            <h2>Games List</h2>
            {products.map((product:Product) => <div key={product.id}>
                <span >{`${product.title} : ${product.price}`}</span>
            </div>)}
        </div >
    );
};

export default ProductList;