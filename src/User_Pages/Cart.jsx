
import { Link } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
  selectItems,
  selectTotalCartItems,
  selectTotalPrice,
} from "../redux/slices/basketSlice";
import CartCard from "../Components/CartCard";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import Header from "../Components/Header/Header";
import { Footer } from "../Components";

export default function Cart() {
  const cartItems = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCartItems = useSelector(selectTotalCartItems);
  const dispatch = useDispatch();

  const increaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };
  //const { isAuthenticated, loginWithRedirect } = useAuth0();
  
  return (
    <>
      {totalCartItems > 0 ? (
        <>
            <Header/>

          <Breadcrumbs>
            <Link className="text-amber-600"to="/">Home</Link>
            <span>Cart</span>
          </Breadcrumbs>

          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Shopping Cart
            </h1>
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul
                  role="list"
                  className="border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                  {cartItems.map((item) => (
                    <CartCard
                      key={item.id}
                      {...item}
                      onRemove={() => dispatch(removeItem(item.id))}
                      onIncrease={() => increaseQuantity(item.id)}
                      onDecrease={() => decreaseQuantity(item.id)}
                    />
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      Rs {totalPrice}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                      <a
                        href="#"
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Learn more about how shipping is calculated
                        </span>
                        <QuestionMarkCircleIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">Rs 300</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <a
                        href="#"
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Learn more about how tax is calculated
                        </span>
                        <QuestionMarkCircleIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">Rs {totalPrice*0.2}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                     Rs {totalPrice+(totalPrice*0.2)+300}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <Link
                    to="/checkout"
                    type="submit"
                    className="w-full bg-black border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Checkout
                  </Link>
                </div>
              </section>
            </form>
          </div>

        
        </>
      ) : (
        <div className="tw-container text-center py-20">
          <h2 className="font-bold text-black text-6xl mb-4">
            Your cart is empty
          </h2>
          <Link
            to="/products"
            className="mt-7 btn-md rounded w-max mx-auto bg-gray-300 text-lg  text-black"
          >
            Fill It
          </Link>
        </div>
      )}
      <Footer/>
    </>
  );
}


