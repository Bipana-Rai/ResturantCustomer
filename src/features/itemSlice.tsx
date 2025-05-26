import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
axios.defaults.withCredentials = true; //axios lae default ma rakheko so that yesle every request ma cookie send garxa
export type AppAxiosError = AxiosError<{ message: string }>;

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
export const addedItemToCart = createAsyncThunk(
  "addedItemToCart",
  async ({ data, userId }: AddToCartPayload, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/cart", {
        ...data,
        quantity: 1,
        userId: userId,
      });

      if (res.status === 200) {
        return { ...data,userId, quantity: 1 };
      }
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getCartItem = createAsyncThunk(
  "getCartItem",
  async ({ userId }: { userId?: string }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/getCart/${userId}`
      );
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteItemFromcart = createAsyncThunk(
  "deleteItemFromCart",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/deleteCartItem/${id}`
      );
      return res.data;
      // setCount(0)
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getTable = createAsyncThunk(
  "getTable",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getTable");
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const addBookingData = createAsyncThunk(
  "addBookingData",
  async (
    { data, status }: { data: BookedData; status: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/addBookingDetail",
        {
          ...data,
          status: status,
        }
      );

      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const getBookingDetail = createAsyncThunk(
  "getBookingDetail",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getBookingDetail");
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const editTableStatus = createAsyncThunk(
  "editTableStatus",
  async ({ id, data }: { id?: string; data: string }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/updateStatus/${id}`,
        { tableStatus: data }
      );
      return { id, tableStatus: data, data: response.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const editBookingDetail = createAsyncThunk(
  "editBookingDetail",
  async (
    { id, data, status }: { id: string; data: BookedData; status: string },
    { rejectWithValue }
  ) => {
    console.log(id, data, status);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/editBookingDetail/${id}`,
        {
          ...data,
          status: status,
        }
      );

      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const deleteBooking = createAsyncThunk(
  "deleteBooking",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/deleteBooking/${id}`
      );
      return { id, data: res.data };
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const addDineInOrder = createAsyncThunk(
  "addDineInOrder",
  async ({ data }: { data: orderData }, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/addDineIn", {
        ...data,
      });

      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteAfterOrder = createAsyncThunk(
  "deleteAfterOrder",
  async ({ userId }: { userId?: string }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/deleteCartOrder/${userId}`
      );
      return res.data;
      // setCount(0)
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const signupDetail = createAsyncThunk(
  "signupDetail",
  async (data: { data: signupData }, { rejectWithValue }) => {
    const finaldata = data.data;
    console.log("slice", finaldata);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/signupData`,
        finaldata
      );

      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export const loginData = createAsyncThunk(
  "loginData",
  async ({ data }: { data: formdata }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/loginData",
        data,
        {
          withCredentials: true,
        }
      );
      console.log("token", res.data);
      return res.data;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const authorizeUser = createAsyncThunk(
  "authorizeUser",
  async (__, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/customer/verify"
      );
      if (response.data.user.role !== "customer") {
        // Optionally reject if role mismatch
        return rejectWithValue("Unauthorized user role for customer app");
      }
      return response.data.user;
    } catch (error) {
      const err = error as AppAxiosError;
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
type AddToCartPayload = {
  data: dishItem; // your dish item type
  userId?: string;
};
export interface signupData {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  role: string;
}
export interface formdata {
  email: string;
  password: string;
}
export interface cartItems {
  _id: string;
  dishName: string;
  dishCategory: string;
  dishPrice: number;
  dishImage?: string;
  added: boolean;
  quantity: number;
  userId?: string;
}
export interface orderData {
  tableNumber: string;
  cartItems: cartItems[];
  totalAmount: number;
  status: string;
  foodStatus: string;
  user?: string;
}
export interface orderTakeAwayData {
  cartItems: cartItems[];
  name: string;
  number: string;
  status: string;
  totalAmount: number;
}
export interface dishItem {
  _id: string;
  dishName: string;
  dishPrice: number;
  dishCategory: string;
  dishImage: string;
  dishDiscription: string;
}
export interface TableData {
  _id: string;
  tableNum: string;
  tableCapacity: number;
  tableLocation?: string;
  tableStatus: string;
}
export interface BookedData {
  _id: string;
  bookingDate: string;
  bookingTime: string;
  email: string;
  fullName: string;
  location: string;
  members: number;
  phNo: string;
  tableNumber: string;
  createdAt: string;
  status: string;
}
interface category {
  _id: string;
  category: string;
  image?: string;
}
export interface userInfo {
  _id?: string;
  email: string;
  fullName: string;
  phone: string;
  role: string;
}

interface CategoryState {
  loading: boolean;
  itemDetail: dishItem[];
  error: string | null;
  categoryDetail: category[];
  cartData: cartItems[];
  tableDetail: TableData[];
  bookingDetail: BookedData[];
  user: userInfo | null;
}
const initialState: CategoryState = {
  loading: false,
  error: null,
  itemDetail: [],
  categoryDetail: [],
  cartData: [],
  tableDetail: [],
  bookingDetail: [],
  user: null,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
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
      })
    
      .addCase(getCartItem.pending, (state) => {
        state.loading = false;
      })
      .addCase(getCartItem.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.cartData = action.payload.data;
        }
      })
      .addCase(getCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteItemFromcart.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteItemFromcart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData = state.cartData.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(deleteItemFromcart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getTable.pending, (state) => {
        state.loading = false;
      })
      .addCase(getTable.fulfilled, (state, action) => {
        state.loading = false;
        state.tableDetail = action.payload as TableData[];
      })
      .addCase(getTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(editTableStatus.pending, (state) => {
        state.loading = false;
      })
      .addCase(editTableStatus.fulfilled, (state, action) => {
        state.loading = false;
        const { id, tableStatus } = action.payload;
        state.tableDetail = state.tableDetail.map((e) =>
          e._id === id ? { ...e, tableStatus } : e
        );
      })
      .addCase(editTableStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getBookingDetail.pending, (state) => {
        state.loading = false;
      })
      .addCase(getBookingDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingDetail = action.payload as BookedData[];
      })
      .addCase(getBookingDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(editBookingDetail.pending, (state) => {
        state.loading = false;
      })
      .addCase(editBookingDetail.fulfilled, (state, action) => {
        state.loading = false;
        const { id, data } = action.payload;
        state.bookingDetail = state.bookingDetail.map((e) =>
          e._id === id ? { ...e, ...data } : e
        );
      })
      .addCase(editBookingDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.bookingDetail = state.bookingDetail.filter((e) => e._id !== id);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});
export const { logoutUser } = itemSlice.actions;
export default itemSlice.reducer;
