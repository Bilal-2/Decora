

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredProductsQuery } from "../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../redux/api/categoryApiSlice";

import {
  setCategories,
  setProducts,
  setChecked,
} from "../redux/features/shop/shopSlice";
import Loader from "../components/Loader";
import ProductCard from "./Products/ProductCard";

const Shop = () => {
  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = useState(false); // State to control visibility of filters
  const [viewGrid, setViewGrid] = useState(true);
  const { categories, products, checked, radio } = useSelector(
    (state) => state.shop
  );

  const categoriesQuery = useFetchCategoriesQuery();
  const [priceFilter, setPriceFilter] = useState("");
  const filteredProductsQuery = useGetFilteredProductsQuery({
    checked,
    radio,
  });

  useEffect(() => {
    if (!categoriesQuery.isLoading) {
      dispatch(setCategories(categoriesQuery.data));
    }
  }, [categoriesQuery.data, dispatch]);

  useEffect(() => {
    if (!checked.length || !radio.length) {
      if (!filteredProductsQuery.isLoading) {
        const filteredProducts = filteredProductsQuery.data.filter(
          (product) => {
            return (
              product.price.toString().includes(priceFilter) ||
              product.price === parseInt(priceFilter, 10)
            );
          }
        );

        dispatch(setProducts(filteredProducts));
      }
    }
  }, [checked, radio, filteredProductsQuery.data, dispatch, priceFilter]);

  const handleBrandClick = (brand) => {
    const productsByBrand = filteredProductsQuery.data?.filter(
      (product) => product.brand === brand
    );
    dispatch(setProducts(productsByBrand));
  };

  const handleCheck = (value, id) => {
    const updatedChecked = value
      ? [...checked, id]
      : checked.filter((c) => c !== id);
    dispatch(setChecked(updatedChecked));
  };

  const uniqueBrands = [
    ...Array.from(
      new Set(
        filteredProductsQuery.data
          ?.map((product) => product.brand)
          .filter((brand) => brand !== undefined)
      )
    ),
  ];

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap">
        <button
        className=" bg-gray-800 text-white px-4 py-2 rounded-full lg:hidden md:hidden xl:hidden"
        onClick={toggleFilters}
      >
        {showFilters ? "Close Filters" : "Open Filters"}
      </button>
          {showFilters && (
            <div className="absolute z-10 top-[9rem] lg:w-[20rem] bg-transparent backdrop-blur-md  p-3 mt-2 mb-2 rounded-lg shodow-ls ml-10">
              <h2 className="h4 text-center py-2 bg-black rounded-full mb-2">
                Filter by Categories
              </h2>
              <div className="p-5">
                {categories?.map((c) => (
                  <div key={c._id} className="mb-2">
                    <div className="flex items-center mr-4">
                      <input
                        type="checkbox"
                        id={c._id}
                        onChange={(e) =>
                          handleCheck(e.target.checked, c._id)
                        }
                        className="w-4 h-4 text-[#6f3914] bg-gray-100 border-gray-300 rounded focus:ring-[#9f5e1d] dark:focus:ring-[#6f3914] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={c._id}
                        className="ml-2 text-sm font-medium text-white dark:text-gray-300"
                      >
                        {c.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="h4 text-center py-2 bg-black rounded-full mb-2">
                Filter by Brands
              </h2>
              <div className="p-5">
                {uniqueBrands?.map((brand) => (
                  <div key={brand} className="mb-5">
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id={brand}
                        name="brand"
                        onChange={() => handleBrandClick(brand)}
                        className="w-4 h-4 text-[#9f5e1d] bg-gray-100 border-gray-300 focus:ring-[#9f5e1d] dark:focus:ring-[#6f3914] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={brand}
                        className="ml-2 text-sm font-medium text-white dark:text-gray-300"
                      >
                        {brand}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="h4 text-center py-2 bg-black rounded-full mb-2">
                Filter by Price
              </h2>
              <div className="p-5">
                <input
                  type="text"
                  placeholder="Enter Price"
                  value={priceFilter}
                  onChange={handlePriceChange}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-[#f3dfc1]"
                />
              </div>
              <div className="p-5 pt-0">
                <button
                  className="w-full border my-4"
                  onClick={() => window.location.reload()}
                >
                  Reset
                </button>
              </div>
            </div>
          )}

          <div className="lg:w-[20rem] bg-[#151515] p-3 mt-2 mb-2 rounded-lg sm:relative ml-10 hidden lg:block md:block ">
              <h2 className="h4 text-center py-2 bg-black rounded-full mb-2">
                Filter by Categories
              </h2>
              <div className="p-5">
                {categories?.map((c) => (
                  <div key={c._id} className="mb-2">
                    <div className="flex items-center mr-4">
                      <input
                        type="checkbox"
                        id={c._id}
                        onChange={(e) =>
                          handleCheck(e.target.checked, c._id)
                        }
                        className="w-4 h-4 text-[#6f3914] bg-gray-100 border-gray-300 rounded focus:ring-[#9f5e1d] dark:focus:ring-[#6f3914] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={c._id}
                        className="ml-2 text-sm font-medium text-white dark:text-gray-300"
                      >
                        {c.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="h4 text-center py-2 bg-black rounded-full mb-2">
                Filter by Brands
              </h2>
              <div className="p-5">
                {uniqueBrands?.map((brand) => (
                  <div key={brand} className="mb-5">
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id={brand}
                        name="brand"
                        onChange={() => handleBrandClick(brand)}
                        className="w-4 h-4 text-[#9f5e1d] bg-gray-100 border-gray-300 focus:ring-[#9f5e1d] dark:focus:ring-[#6f3914] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={brand}
                        className="ml-2 text-sm font-medium text-white dark:text-gray-300"
                      >
                        {brand}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="h4 text-center py-2 bg-black rounded-full mb-2">
                Filter by Price
              </h2>
              <div className="p-5">
                <input
                  type="text"
                  placeholder="Enter Price"
                  value={priceFilter}
                  onChange={handlePriceChange}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-[#f3dfc1]"
                />
              </div>
              <div className="p-5 pt-0">
                <button
                  className="w-full border my-4"
                  onClick={() => window.location.reload()}
                >
                  Reset
                </button>
              </div>
            </div>



          <div className="lg:w-auto w-full p-3">
            <h2 className="h4 text-center mb-2">{products?.length} Products</h2>
            <div
              className={`mt-6 ${
                viewGrid
                  ? "grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 justify-items-stretch"
                  : ""
              }`}
            >
              {products.length === 0 ? (
                <Loader />
              ) : (
                products?.map((p) => (
                  <div className="p-3 " key={p._id}>
                    <ProductCard p={p} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Shop;
