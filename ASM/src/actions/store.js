import { configureStore } from "@reduxjs/toolkit";
import cartSilce from "./cartSilce";
import authentocatinSilce from "./authentocatinSilce";

export const store = configureStore({
  reducer: {
    cart: cartSilce,
    authentocatin: authentocatinSilce,
    
  },
});
