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

//OZETLEMEK GEREKIRSE: ONCE SLICE METODU ILE DEGISKENLERIN "INITIAL.STATE" DEGERLERI BELIRTILIR. SONRA AYNI FONKSIYON ICINDE REDUCER ACTION'LARI TANIMLANIP DEGISKENLERIN DEGERLERI VERILIR. ARDINDAN BU ACTION'LAR EXPORT EDILIR. SON OLARAK ISTENILEN "TRY.CATCH" BLOGUNDA AXIOS ILE ISTEK YAPIP DISPATCH'LER ILE ACTIONLARA YONLENDIRMELER YAPILIR. 
export const {
  fetchStart,
  getSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
