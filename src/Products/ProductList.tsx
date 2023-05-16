import React from 'react';


interface ProductListProps{

}
const initialProducts = [
{ id: 1, title: 'Scape ', price: 100},
{ id: 2, title: 'Hunter', price: 200 },
{ id: 3, title: 'War', price: 300 },    
]
const ProductList: React.FC<ProductListProps> = ({}) => {
 
  return (
    <div>
        <label htmlFor=""> Games List</label>
        {initialProducts.map((product)=>(
             <div key={product.id}>
                <span >${product.title} : ${product.price}</span>
                </div>
                )) }
    </div>
  );
};

export default ProductList;