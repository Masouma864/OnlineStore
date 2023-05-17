import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: string;
    title: string;
    price: number;
}
const initialState: Product[] = [
    { id: '1f', title: 'Scape ', price: 100 },
    { id: '2f', title: 'Hunter', price: 200 },
    { id: '3f', title: 'War', price: 300 },
]

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state,]
          

        }
    }

})
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
export const getProductsSelector = (state: Rootstate) => state.products;
