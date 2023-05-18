import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsSelector ,removeProduct } from './products.slice';
import { Product } from './products.slice';
import { useAppDispatch } from '../store.hooks';

interface ProductListProps {

}

const ProductList: React.FC<ProductListProps> = ({ }) => {
    const products = useSelector(getProductsSelector);
    const dispatch = useAppDispatch();

    const removeFromStore = (id: string) => {

        dispatch(removeProduct(id));
    }

    return (
        <div>
            <h2>Games List</h2>
            {products.map((product: Product) => <div key={product.id}>
                <span >{`${product.title} : ${product.price}`}</span>
                <button onClick={() => removeFromStore(product.id)}> Remove From store </button>
            </div>)}
        </div >
    );
};

export default ProductList;