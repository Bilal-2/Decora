import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <ToastContainer />
      {/* <Navigation /> */}
      <Header/>
      <main className=" ">
        <Outlet />
      </main>
    </>
  );
};

export default App;
