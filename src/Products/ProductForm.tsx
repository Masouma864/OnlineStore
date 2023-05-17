import React, { useState } from "react";

interface ProductFromProps {

}

const ProductForm: React.FC<ProductFromProps> = ({ }) => {
    return (
        <>
            <h1>Product Games to store</h1>
            <form action="">
                <input type="text" name="id" placeholder="Game Id" />
                <input type="number" name="price" placeholder="Game Price" />
                <input type="text" name="title" placeholder="Game Title" />
                <button>Add Game</button>
            </form>
        </>
    );
}

export default ProductForm;