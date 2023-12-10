import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = import.meta.env.VITE_APP_BASE_URL;
export const fetchData = createAsyncThunk("cart/fetchData", async (id) => {
  try {
    const response = await fetch(`${url}/laptop/sanphamchitiet/${id}`);

    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    error;
  }
});

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {
    themSP: (state, action) => {
      const sp = action.payload;
      const index = state.data.findIndex((s) => s.id_sp === sp.id_sp);
      if (index === -1) {
        const newProduct = { ...sp, soluong: 1 };
        state.data = [...state.data, newProduct];
      } else {
        state.data = state.data.map((item, i) =>
          i === index ? { ...item, soluong: item.soluong + 1 } : item
        );
      }
    },
    suaSL: (state, param) => {
      let id_sp = param.payload[0];
      let soluong = param.payload[1];
  
      // Tìm sản phẩm trong state.data dựa trên id_sp
      let product = state.data.find(product => product.id_sp === id_sp);
  
      if (product) {
          product.soluong = Number(soluong);
          console.log("Đã sửa sp ", param);
      } else {
          console.log("Không tìm thấy sản phẩm với id_sp =", id_sp);
      }
  },
    xoaSP: (state, action) => {
      const id_sp = action.payload;
      console.log(state);
      const index = state.data.findIndex((s) => s.id_sp === id_sp);

      if (index !== -1) {
        state.data.splice(index, 1);
        console.log("Xóa sp Thành công ");
      } else {
        console.log("lỗi ", id_sp);
      }
    },
    xoaGH: (state) => {
      state.data = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { themSP, suaSL, xoaSP, xoaGH } = cartSlice.actions;
export default cartSlice.reducer;
