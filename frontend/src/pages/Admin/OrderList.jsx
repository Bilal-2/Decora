// import Message from "../../components/Message";
// import Loader from "../../components/Loader";
// import { Link } from "react-router-dom";
// import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";
// import AdminMenu from "./AdminMenu";

// const OrderList = () => {
//   const { data: orders, isLoading, error } = useGetOrdersQuery();

//   return (
//     <div>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">
//           {error?.data?.message || error.error}
//         </Message>
//       ) : (
//         <div>
//           <AdminMenu />
//           <div className=" overflow-x-auto  mt-[3rem]">
//             <table className="container mx-auto ">
//               <thead className="w-full border">
//                 <tr className="mb-[5rem] ">
//                   <th className="text-left pl-1">ITEMS</th>
//                   <th className="text-left pl-1">ID</th>
//                   <th className="text-left pl-1">USER</th>
//                   <th className="text-left pl-1">DATA</th>
//                   <th className="text-left pl-1">TOTAL</th>
//                   <th className="text-left pl-1">PAID</th>
//                   <th className="text-left pl-1">DELIVERED</th>
//                   <th></th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order._id}>
//                     <td>
//                       <img
//                         src={order.orderItems[0].image}
//                         alt={order._id}
//                         className="w-[5rem] pt-4"
//                       />
//                     </td>
//                     <td>{order._id}</td>

//                     <td>{order.user ? order.user.username : "N/A"}</td>

//                     <td>
//                       {order.createdAt
//                         ? order.createdAt.substring(0, 10)
//                         : "N/A"}
//                     </td>

//                     <td>Rs {order.totalPrice}</td>

//                     <td className="py-2">
//                       {order.isPaid ? (
//                         <p className="p-1 text-center bg-green-400 w-[6rem] rounded-full">
//                           Completed
//                         </p>
//                       ) : (
//                         <p className="p-1 text-center bg-red-400 w-[6rem] rounded-full">
//                           Pending
//                         </p>
//                       )}
//                     </td>

//                     <td className="px-2 py-2">
//                       {order.isDelivered ? (
//                         <p className="p-1 text-center bg-green-400 w-[6rem] rounded-full">
//                           Completed
//                         </p>
//                       ) : (
//                         <p className="p-1 text-center bg-red-400 w-[6rem] rounded-full">
//                           Pending
//                         </p>
//                       )}
//                     </td>

//                     <td>
//                       <Link to={`/order/${order._id}`}>
//                         <button>More</button>
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderList;
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";
import AdminMenu from "./AdminMenu";

const OrderList = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div>
          <AdminMenu />
          <div className="overflow-x-auto mt-3">
            <table className="w-full">
              <thead className="border">
                <tr>
                  <th className="px-3 py-2">ITEMS</th>
                  <th className="px-3 py-2">ID</th>
                  <th className="px-3 py-2">USER</th>
                  <th className="px-3 py-2">DATE</th>
                  <th className="px-3 py-2">TOTAL</th>
                  <th className="px-3 py-2">PAID</th>
                  <th className="px-3 py-2">DELIVERED</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="px-3 py-2">
                      <img
                        src={order.orderItems[0].image}
                        alt={order._id}
                        className="w-16 h-16 md:w-24 md:h-24"
                      />
                    </td>
                    <td className="px-3 py-2">{order._id}</td>

                    <td className="px-3 py-2">
                      {order.user ? order.user.username : "N/A"}
                    </td>

                    <td className="px-3 py-2">
                      {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                    </td>

                    <td className="px-3 py-2">Rs {order.totalPrice}</td>

                    <td className="px-3 py-2">
                      {order.isPaid ? (
                        <p className="text-center bg-green-600 text-white px-2 py-1 rounded-full">Completed</p>
                      ) : (
                        <p className="text-center bg-red-600 text-white px-2 py-1 rounded-full">Pending</p>
                      )}
                    </td>

                    <td className="px-3 py-2">
                      {order.isDelivered ? (
                        <p className="text-center bg-green-600 text-white px-2 py-1 rounded-full">Completed</p>
                      ) : (
                        <p className="text-center bg-red-600 text-white px-2 py-1 rounded-full">Pending</p>
                      )}
                    </td>

                    <td className="px-3 py-2">
                      <Link to={`/order/${order._id}`}>
                        <button className="px-2 py-1    bg-[#645832] hover:bg-[#5c4d1c] text-white rounded ">More</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;
