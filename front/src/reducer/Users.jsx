import { createSlice } from "@reduxjs/toolkit";
import { FakeData } from "../FakeData";


export const productSlice = createSlice({
    name : "products" , 
    initialState : {value  : FakeData } ,

    reducers :
     {
        addproduct  : (state , action) =>{
            state.value.push(action.payload)
        }
    }
});
export const {addproduct}  = productSlice.actions ;
export default productSlice.reducer ;