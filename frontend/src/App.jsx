import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <ToastContainer />
      {/* <Navigation /> */}
      <Header/>
      <main className=" ">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default App;
