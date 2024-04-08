import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../../redux/api/productApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import moment from "moment";
import HeartIcon from "./HeartIcon";
import Ratings from "./Ratings";
import ProductTabs from "./ProductTabs";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductDetails = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error?.data || error.message);
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const arHandler = () => {
    navigate(`/AR/${productId}`);
  };

  return (
    <>
      <div>
        <Link
          to="/"
          className="text-white font-semibold hover:underline ml-[10rem]"
        >
          Go Back
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <>
          <div className="items-between mt-[2rem] lg:mx-[5rem] mx:ml-[5rem] mx-[2rem] ">
            <div className="lg:flex md:flex lg xl:flex sm:flex gap-4">
              {/* Col-1 */}
              <div className="relative w-full lg:w-1/2 mb-3    display-inline rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full  rounded-lg"
                />

                <HeartIcon className="absolute top-0" product={product} />
              </div>
              {/* Col-2 */}
              <div className="">
                <div className="flex flex-col justify-between">
                  <h2 className="text-4xl font-semibold">{product.name}</h2>
                  <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
                    {product.description}
                  </p>

                  <p className="text-4xl my-4 font-extrabold">
                    Rs {product.price}
                  </p>

                  <div className="lg:flex flex-nowrap  items-center justify-between lg:w-[20rem]">
                    <div className="flex flex-col">
                      <h1 className="flex items-center mb-6">
                        <FaStore className="mr-2 text-white" /> Brand:{" "}
                        {product.brand}
                      </h1>
                      <h1 className="flex items-center mb-6 lg:w-[20rem]">
                        <FaClock className="mr-2 text-white" /> Added:{" "}
                        {moment(product.createAt).fromNow()}
                      </h1>
                      <h1 className="flex items-center mb-6 w-[10rem]">
                        <FaStar className="mr-2 text-white" /> Reviews:{" "}
                        {product.numReviews}
                      </h1>
                    </div>

                    <div className="two">
                      <h1 className="flex items-center mb-6 w-[10rem]">
                        <FaStar className="mr-2 text-white" /> Ratings: {rating}
                      </h1>
                      <h1 className="flex items-center mb-6 w-[10rem]">
                        <FaShoppingCart className="mr-2 text-white" /> Quantity:{" "}
                        {product.quantity}
                      </h1>
                      <h1 className="flex items-center mb-6 w-[10rem]">
                        <FaBox className="mr-2 text-white" /> In Stock:{" "}
                        {product.countInStock}
                      </h1>
                    </div>
                  </div>

                  <div className="flex justify-between flex-wrap">
                    <Ratings
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />

                    {product.countInStock > 0 && (
                      <div>
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          className="p-2 w-[6rem] rounded-lg text-black"
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>
                {/* buttons */}
                <div className="btn-container ">
                  <button
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                    className="bg-pink-600 text-white py-2 px-4 rounded-lg mt-4 md:mt-0"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={arHandler}
                    disabled={product.countInStock === 0}
                    className="bg-pink-600 text-white ml-10 py-2 px-4 rounded-lg mt-4 md:mt-0"
                  >
                    View In 3D
                  </button>
                </div>
              </div>
            </div>

            <div className="container flex flex-wrap items-start justify-between mt-[2rem] lg:mx-[5rem] ml-[-1rem]">
              <ProductTabs
                loadingProductReview={loadingProductReview}
                userInfo={userInfo}
                submitHandler={submitHandler}
                rating={rating}
                setRating={setRating}
                comment={comment}
                setComment={setComment}
                product={product}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
