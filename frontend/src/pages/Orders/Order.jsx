import { Link, useParams } from "react-router-dom";
//import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Messsage from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from "../../redux/api/orderApiSlice";
import { useCreateOrderMutation } from "../../redux/api/orderApiSlice";

const Order = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

   const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();
  const { userInfo } = useSelector((state) => state.auth);

  //const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  // const {
  //   data: paypal,
  //   isLoading: loadingPaPal,
  //   error: errorPayPal,
  // } = useGetPaypalClientIdQuery();

  // useEffect(() => {
  //   if (!errorPayPal && !loadingPaPal && paypal.clientId) {
  //     const loadingPaPalScript = async () => {
  //       paypalDispatch({
  //         type: "resetOptions",
  //         value: {
  //           "client-id": paypal.clientId,
  //           currency: "USD",
  //         },
  //       });
  //       paypalDispatch({ type: "setLoadingStatus", value: "pending" });
  //     };

  //     if (order && !order.isPaid) {
  //       if (!window.paypal) {
  //         loadingPaPalScript();
  //       }
  //     }
  //   }
  // }, [errorPayPal, loadingPaPal, order, paypal, paypalDispatch]);


  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  }

  // function onApprove(data, actions) {
  //   return actions.order.capture().then(async function (details) {
  //     try {
  //       await payOrder({ orderId, details });
  //       refetch();
  //       toast.success("Order is paid");
  //     } catch (error) {
  //       toast.error(error?.data?.message || error.message);
  //     }
  //   });
  // }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [{ amount: { value: order.totalPrice } }],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  // function onError(err) {
  //   toast.error(err.message);
  // }

  // const handlePay = (details) => {
  //   try {
  //     const { id, status, update_time, email_address } = details;
  //     payOrder({ orderId, details });
  //     refetch();
  //     toast.success("Order is paid");
  //   } catch (error) {
  //     toast.error(error?.data?.message || error.message);
  //   }
  // };

  const handlePay = async (orderId, details) => {
    try {
      // You might not need to destructure details here, but if you do, ensure details is defined correctly.
      // const { id, status, update_time, email_address } = details;
      const result = await payOrder({ orderId, details }); // Assuming `payOrder` returns a Promise
      if (result) {
        // Assuming refetch is defined somewhere in your component.
        refetch();
        toast.success("Order is paid");
      } else {
        toast.error("Failed to mark order as paid");
      }
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  // async function handlePay(orderId, details) {
  //   console.log("details", details);
  //   console.log("orderId", orderId);
  //   try {
  //     // Check if details is defined and contains the email_address property
  //     if (details && details.email_address) {
  //       // Assuming `orderId` is defined somewhere
  //       await payOrder({ orderId, details }).unwrap(); // Assuming `payOrder` returns a Promise
  //       refetch();
  //       toast.success("Order is paid");
  //     } else {
  //       toast.error("Invalid details received");
  //     }
  //   } catch (error) {
  //     toast.error(error?.data?.message || error.message);
  //   }
  // }
  
  

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Messsage variant="danger">{error.data.message}</Messsage>
  ) : (
    <div className="container flex flex-col lg:flex-row md:flex-row lg:mx-[2rem] md:mx-[2rem] ">
      <div className="lg:w-2/3 lg:pr-4 p-2 ">
        <div className="border gray-300 mt-5 pb-4 mb-5">
          {order.orderItems.length === 0 ? (
            <Messsage>Order is empty</Messsage>
          ) : (
            <div className="overflow-x-auto">
              <table className="lg:w-[80%]">
                <thead className="border-b-2">
                  <tr>
                    <th className="p-2">Image</th>
                    <th className="p-2">Product</th>
                    <th className="p-2 text-center">Quantity</th>
                    <th className="p-2">Unit Price</th>
                    <th className="p-2">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {order.orderItems.map((item, index) => (
                    <tr key={index}>
                      <td className="p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover"
                        />
                      </td>

                      <td className="p-2">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </td>

                      <td className="p-2 text-center">{item.qty}</td>
                      <td className="p-2 text-center">{item.price}</td>
                      <td className="p-2 text-center">
                        Rs {(item.qty * item.price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="md:w-1/3 p-2 ">
        <div className="mt-5 border-gray-300 pb-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Shipping</h2>
          <p className="mb-4 mt-4">
            <strong className="text-[#9f5e1d]">Order:</strong> {order._id}
          </p>

          <p className="mb-4">
            <strong className="text-[#9f5e1d]">Name:</strong>{" "}
            {order.user.username}
          </p>

          <p className="mb-4">
            <strong className="text-[#9f5e1d]">Email:</strong>{" "}
            {order.user.email}
          </p>

          <p className="mb-4">
            <strong className="text-[#9f5e1d]">Address:</strong>{" "}
            {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
            {order.shippingAddress.postalCode}, {order.shippingAddress.country}
          </p>

          <p className="mb-4">
            <strong className="text-[#9f5e1d]">Method:</strong>{" "}
            {order.paymentMethod}
          </p>

          {order.isPaid ? (
            <Messsage className="w-auto" variant="success">
              Paid on {order.paidAt}
            </Messsage>
          ) : (
            <Messsage className="w-auto" variant="danger">
              Not paid
            </Messsage>
          )}
        </div>

        <h2 className="text-xl font-bold mb-2 mt-[3rem]">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Items</span>
          <span>Rs {order.itemsPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>Rs {order.shippingPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax</span>
          <span>Rs {order.taxPrice}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total</span>
          <span>Rs {order.totalPrice}</span>
        </div>

        {order.paymentMethod === "Cash On Dilevery" &&
          order.createdAt === "" && (
            <>
              <Link to="/user-orders">
                <button
                  onClick={createOrder}
                  className="bg-[#9f5e1d] hover:bg-[#6f3914] text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
                >
                  Place Order
                </button>
              </Link>
            </>
          )}

        {userInfo && !userInfo.isAdmin && order.createdAt !== "" && (
          <>
            <Link to="/user-orders">
              <button className="bg-[#9f5e1d] hover:bg-[#6f3914] text-white px-4 py-2 rounded cursor-pointer my-[1rem]">
                MY ORDERS
              </button>
            </Link>
          </>
        )}

        {!order.isPaid && order.paymentMethod === "Credit Card" && (
          <div>
            {loadingPay && <Loader />}{" "}
            {
            // isPending ? (
            //   <Loader />
            // ) : 
            (
              <div>
                <div>
                  <button
                    onClick={createOrder}
                    className="bg-[#9f5e1d] hover:bg-[#6f3914] text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
                  >
                    Credit card
                  </button>

                  {/* <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  ></PayPalButtons> */}
                </div>
              </div>
            )}
          </div>
        )}

        {loadingDeliver && <Loader />}
        {userInfo &&
          userInfo.isAdmin &&
          order.paymentMethod === "Cash On Dilevery" &&
          !order.isPaid &&
          !order.isDelivered && (
            <div>
              <button
                type="button"
                className="bg-[#9f5e1d] hover:bg-[#6f3914] text-white w-full py-2"
                onClick={() =>
                  handlePay(order._id, {
                    id: userInfo._id,
                    status: "Paid - Cash On Delivery",
                    update_time: Date.now(),
                    email_address: userInfo.email
                  })
                }
              >
                Mark As Paid
              </button>
            </div>
          )}
        {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
          <div>
            <button
              type="button"
              className="bg-[#9f5e1d] hover:bg-[#6f3914] text-white w-full py-2"
              onClick={deliverHandler}
            >
              Mark As Delivered
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
