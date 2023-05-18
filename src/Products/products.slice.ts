import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";


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
            state.push(action.payload)

        }
    }

})
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
export const getProductsSelector = (state: RootState) => state.products;
