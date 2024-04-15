import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="rounded-lg ml-[2rem] p-3 relative shadow-2xl hover:shadow-inner">
      <div className="relative w-[15rem] ">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md object-cover "
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span className="bg-[#f1ddb3]  text-[#9f5e1d] text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ">
              Rs  {product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
