import React, { useState } from "react";
import { Product } from "./products.slice";
import { useAppDispatch } from "../store.hooks";
import { addProduct } from "./products.slice";

const ProductForm: React.FC = ({ }) => {
const dispatch = useAppDispatch();

    const [product, setProduct] = useState<Product>({
        id: "",
        price: 0,
        title: ""
    });

const { id, price, title } = product;
    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => 
    setProduct(prev => {
        (prev as any)[name] = value;
        const newValue = { ...prev };
        return newValue;

    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addProduct(product));
    }
        return (
            <>
                <h1>Product Games to store</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="id" placeholder="Game Id" value={id} onChange={handleChange} />
                    <input type="number" name="price" placeholder="Game Price" value={price} onChange={handleChange} />
                    <input type="text" name="title" placeholder="Game Title" value={title} onChange={handleChange} />
                    <button type="submit">Add Game</button>
                </form>
            </>
        );
    
}

export default ProductForm;