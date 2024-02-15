import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    purchases:null, 
    loading: false,
    error: false,
    products:null,
    firms:null,
    sale:null,
    brands:null,
    categoriess:null
  },
  reducers: {
    //bunların adı "action creator"
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload:{data,url} }) => {
        state.loading = false;
        state[url]=data;
        //STATE ICINDEN FIRMS,BRANDS,PRODUCTS.. FARKLI VERILER GELECEGI ICIN GELEN URL'YE GORE DATA'YA AKTAR DIYEBILIRIZ. DEGISKEN URL OLDUGU ICIN KOSELI PARANTEZ ILE ERISIRIZ.
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  registerSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
