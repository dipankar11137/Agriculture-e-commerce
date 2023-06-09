import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Share/Navbar';
import NotFound from "./Components/Share/NotFound";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import RequireAuth from './Components/Login/RequireAUth';
import Blog from './Components/Pages/Blog/Blog';
import BuyProducts from './Components/Pages/BuyProducts/BuyProducts';
import ManageBookings from './Components/Pages/Home/ManageBooking/ManageBookings';
import ManageItems from './Components/Pages/ManageItem.js/ManageItems';
import MyItems from './Components/Pages/MyItem/MyItems';
import Payment from './Components/Pages/MyItem/Payment/Payment';
AOS.init();

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/buy/:id"
          element={
            <RequireAuth>
              <BuyProducts />
            </RequireAuth>
          }
        ></Route>
        <Route path="/payment/:id" element={<Payment />}></Route>
        <Route
          path="/manageItem"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageBooking"
          element={
            <RequireAuth>
              <ManageBookings />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
