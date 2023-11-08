
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {
  AboutUs,
  Cart,
  Categories,
  CheckOut,
  ContactUs,
  Faqs,
  HomePage,
  LogIn,
  ManageAccount,
  Returns,
  SignUp,
  ViewProduct,
  WishList} from './User_Pages/index'

  import {
    AddProduct,
    AdminLogin,
    Dashboard,
    ManageOrders,
    ManageReturns,
    ManageUsers,
    Manageproducts,
    Revenue} from './Admin_Pages/index'

  




function App() {
  

  return (
    <>
       <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/LogIn" element={<LogIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Categories" element={<Categories />} />
          <Route exact path="/ViewProduct" element={<ViewProduct />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/CheckOut" element={<CheckOut />} />
          <Route exact path="/Returns" element={<Returns />} />
          <Route exact path="/ManageAccount" element={<ManageAccount />} />
          <Route exact path="/WishList" element={<WishList />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/FAQs" element={<Faqs />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/AddProduct" element={<AddProduct />} />
          <Route exact path="/ManageOrders" element={<ManageOrders />} />
          <Route exact path="/ManageReturns" element={<ManageReturns />} />
          <Route exact path="/ManageUsers" element={<ManageUsers />} />
          <Route exact path="/ManageProducts" element={<Manageproducts />} />
          <Route exact path="/Revenue" element={<Revenue />} />


        </Routes>

      </Router>
    </>
  )
}

export default App
