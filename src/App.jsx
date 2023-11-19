import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  WishList,
} from "./User_Pages/index";

import {
  AddProduct,
  AdminLogin,
  Dashboard,
  ManageOrders,
  ManageReturns,
  ManageUsers,
  Manageproducts,
  Revenue,
} from "./Admin_Pages/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SingleProduct from "./User_Pages/SingleProduct";
import Products from "./User_Pages/products";
import { StoreProvider } from "./context";

function App() {
  return (
    <>
      <Provider store={store}>
        <StoreProvider>
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
              <Route
                exact
                path="/ManageProducts"
                element={<Manageproducts />}
              />
              <Route exact path="/Revenue" element={<Revenue />} />
              <Route exact path="/products" element={<Products />} />
              <Route path="products/:id" element={<SingleProduct />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem", textAlign: "center" }}>
                    <p>404 Page not found</p>
                  </main>
                }
              />
            </Routes>
          </Router>
        </StoreProvider>
      </Provider>
    </>
  );
}

export default App;
