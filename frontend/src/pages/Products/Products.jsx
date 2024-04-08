import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../../redux/api/productApiSlice";
import Rating from "./Rating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { addToCart } from "../../redux/features/cart/cartSlice";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import moment from "moment";
import ProductTabs from "./Tabs";
import HeartIcon from "./HeartIcon";

const Product = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

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
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="w-[100vw]">
      <div >
        <Link
          className="text-white font-semibold hover:underline ml-[10rem]"
          to="/"
        >
          Go Back
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
        <div className="flex justify-center items-center ">
          
          <div className="flex flex-wrap relative items-center mt-5 ml-2 sm:flex-col sm:items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-full sm:w-auto"
            />
            <HeartIcon product={product} />
          </div>
          
          <div>
          <div className="flex flex-col justify-between items-center sm:items-start">
            <h2 className="text-2xl font-semibold mt-5">{product.name}</h2>
            <p className="my-4 text-[#B0B0B0]">{product.description}</p>
            <p className="text-5xl my-4 font-extrabold">Rs {product.price}</p>
            <div className="flex md:flex-col sm:flex-col">
              <div className="flex flex-col">
                <h1 className="flex items-center mb-3">
                  <FaStore className="mr-2 text-white" /> Brand: {product.brand}
                </h1>
                <h1 className="flex items-center mb-3">
                  <FaClock className="mr-2 text-white" /> Added:{" "}
                  {moment(product.createdAt).fromNow()}
                </h1>
                <h1 className="flex items-center mb-3">
                  <FaStar className="mr-2 text-white" /> Reviews:
                  {product.numReviews}
                </h1>
              </div>
              <div className="flex flex-col sm:ml-5">
                <h1 className="flex items-center mb-3">
                  <FaStar className="mr-2 text-white" /> Ratings: {rating}
                </h1>
                <h1 className="flex items-center mb-3">
                  <FaShoppingCart className="mr-2 text-white" /> Quantity:{" "}
                  {product.quantity}
                </h1>
                <h1 className="flex items-center mb-3">
                  <FaBox className="mr-2 text-white" /> In Stock:{" "}
                  {product.countInStock}
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 w-full sm:w-auto">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              {product.countInStock > 0 && (
                <div>
                  <select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
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
            <div className="btn-container mt-5">
              <button
                onClick={addToCartHandler}
                disabled={product.countInStock === 0}
                className="bg-[#9f5e1d] hover:bg-[#6f3914] text-white py-2 px-4 rounded-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
          </div>
          </div>
          <div className="mt-5 container">
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
        </>
      )}
    </div>
  );
};

export default Product;
