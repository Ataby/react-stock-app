import axios from "axios";

const BASE_URL ="https://659a7537652b843dea539125.mockapi.io/api/v1/task";

export const axiosPublic = axios.create({
    baseURL: BASE_URL
    //TOKENSIZ API ISTEKLERI ICIN INSTANCE
})

 //const {token }= useSelector((state)=> state.auth);
 //EGER BIR HOOK ICERISINDE ISEK DIGER HOOK'LARI KULLANMAMIZ MUMKUN. "USE.SELECTOR" HOOK'U ILE STATE'DEKI O AN DEGERINI OKUYABILIRIZ.