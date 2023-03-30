import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "Loading",
});

const initialState = {
  data: [],
  status: STATUS.IDLE,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.data = [];
        state.status = STATUS.ERROR;
      });
  },
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

//thunks
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const resp = await fetch("https://fakestoreapi.com/products");
//       const data = await resp.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  return data;
});
