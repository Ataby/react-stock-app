import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Purchases from "../pages/Purchases";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import Firms from "../pages/Firms";
import Products from "../pages/Products";
import Sales from "../pages/Sales";


const AppRouter = () => {
  // bir kullanıcının giriş bilgileri veya uygulama ayarları gibi veriler, program kapatıldığında bile saklanmalıdır, böylece sonraki oturumlarda erişilebilir olabilir. Bu tür veriler, genellikle dosya sistemine veya bir veritabanına yazılarak persistent olarak saklanır.
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} /> */}
        <Route path="/" element={<Dashboard />} />
  
        <Route path="stock" element={<Dashboard />}>
          {/* <Route index element={<Home/> }/> */}
          <Route path="purchases" element={ <Purchases/>}/>
          <Route path="brands" element={ <Brands/>}/>
          <Route path="firms" element={ <Firms/>}/>
          <Route path="products" element={ <Products/>}/>
          <Route path="sales" element={ <Sales/>}/>
        </Route>
      </Routes>
    </Router>
     /* //ASIL LOGIN VE REGISTER ICEREN SAYFA YAPILARI ASAGIDAKI SEKILDEDIR.
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="register" element={<Register />} />
    //     <Route path="stock" element={<PrivateRouter />}>
    //       <Route path="" element={<Dashboard />} />
    //     </Route>
    //   </Routes>
    // </Router> */
  );
};

export default AppRouter;
