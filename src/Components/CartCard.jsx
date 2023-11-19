import PropTypes from "prop-types";
import { TiTimes } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function CartCard({
  id,
  name,
  price,
  image,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/products/${id}`);
  };
    //const inStock = quantity > 0;
  return (
   
    <>
      <li key={id} className="flex py-6 sm:py-10">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-24 h-30 rounded-md object-center object-cover sm:w-48 sm:h-48"
          />
        </div>

        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div>
              <div className="flex justify-between">
                <h3 className="text-sm capitalize">
                  <a
                    onClick={handleClick}
                    className="font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                  >
                    {name}
                  </a>
                </h3>
              </div>

              <p className="mt-1 text-sm font-medium text-gray-900">Rs {price}</p>
            </div>

            <div className="mt-4 sm:mt-0 sm:pr-9">
              <div className=" flex justify-between items-center">
                <button
                  onClick={onDecrease}
                  className="bg-[#94634b] px-2 text-white rounded"
                >
                  -
                </button>
                <span className="px-2 text-black">{quantity}</span>
                <button
                  onClick={onIncrease}
                  className="bg-[#94634b] px-2 text-white rounded"
                >
                  +
                </button>
              </div>
             

              <div className="absolute top-0 right-0">
                <button
                  type="button"
                  className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Remove</span>
                  {/* <XIconSolid className="h-5 w-5" aria-hidden="true" /> */}
                  <TiTimes
                    onClick={onRemove}
                    color="#ccc"
                    size={22}
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
            {inStock ? (
              <CheckIcon
                className="flex-shrink-0 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <ClockIcon
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                aria-hidden="true"
              />
            )}

            <span>
              {inStock ? "In stock" : `Ships in `}
            </span>
          </p> */}
        </div>
      </li>
    </>
  );
}

CartCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  stock: PropTypes.number.isRequired,
};

export default CartCard;
