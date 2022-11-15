
import './App.css';
import Home from './Component/Page/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Shared/Navbar/Navbar';
import Parchase from './Component/Page/Parchase/Parchase';
import Login from './Component/Page/Login/Login';
import RequireAuth from './Component/Shared/Navbar/RequireAuth/RequireAuth';
import SignUp from './Component/Page/SignUp/SignUp';
import DashBoard from './Component/Page/DashBorard/DashBoard';
import AddReview from './Component/Page/DashBorard/AddReview';
import MyOrder from './Component/Page/DashBorard/MyOrder';
import MyProfile from './Component/Page/DashBorard/MyProfile';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Component/Page/DashBorard/payment';
import SeeProfile from './Component/Page/DashBorard/SeeProfile';
import UpdateProfile from './Component/Page/DashBorard/UpdateProfile';
import MakeAdmin from './Component/Page/DashBorard/MakeAdmin';
import ManageAllOrders from './Component/Page/DashBorard/ManageAllOrders';
import ManageProducts from './Component/Page/DashBorard/ManageProducts';
import AddProducts from './Component/Page/DashBorard/AddProducts';
import RequireAdmin from './Component/Shared/requireAdmin';
import NotFound from './Component/Page/NotFound/NotFound';
import Blog from './Component/Page/Blog/Blog';
import MyPortfolio from './Component/Page/MyPortfolio/MyPortfolio';
import UpdateProduct from './Component/Page/DashBorard/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/purchase/:purchaseId' element={<RequireAuth><Parchase></Parchase></RequireAuth>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>} >

          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='seeProfile' element={<SeeProfile></SeeProfile>}></Route>
          <Route path='updateProfile/:uId' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path='updateProduct/:uId' element={<RequireAdmin><UpdateProduct></UpdateProduct></RequireAdmin>}></Route>


        </Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
