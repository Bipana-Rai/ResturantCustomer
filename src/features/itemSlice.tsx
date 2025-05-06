import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
type AppAxiosError = AxiosError<{ message: string }>;

export const getItems = createAsyncThunk(
  "getItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getDish");
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getCategory = createAsyncThunk(
  "getCategory",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getCategory");
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export  interface dishItem {
  _id: string;
  dishName: string;
  dishPrice: number;
  dishCategory: string;
  dishImage: string;
  dishDiscription:string
}
interface category{
  category:string,
  image?:string
}
interface CategoryState {
  loading: boolean;
  itemDetail: dishItem[];
  error: string | null;
  categoryDetail:category[]
}
const initialState: CategoryState = {
  loading: false,
  error: null,
  itemDetail: [],
  categoryDetail:[]
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.loading = false;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.loading = false;
        state.itemDetail = action.payload.data as dishItem[];
      })
      .addCase(getItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getCategory.pending, (state) => {
        state.loading = false;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetail = action.payload as category[];
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default itemSlice.reducer;
