import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import Hero from '../components/Hero'
import Service from "../components/Services.jsx";
import About from '../components/About.jsx'
import Discover from '../components/Discover.jsx'
const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>

      <Hero/>
      <Service/>
      <About/>
      <Discover/>
      
    </>
  );
};

export default Home;
