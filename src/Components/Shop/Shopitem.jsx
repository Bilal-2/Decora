import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useNavigate,Link } from "react-router-dom";
import Header from "../Header/Header";


const ShopItem = ({
  image,
  id,
  company,
  name,
  price,
  onClick,
  exists,
  grid = true,
  shouldApplyFullWidth
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/products/${id}`);
  };

  if (grid) {
    return (
      <>
      
        <a
          onClick={handleClick}
          className={`bg-red relative ${shouldApplyFullWidth ? 'lg:w-full md:w-full sm:w-6/12' : 'lg:w-3/12 md:w-4/12 sm:w-6/12'} md:w-4/12 sm:w-6/12 w-full mb-10`}
        >
          <div className="mx-4 bg-[#faf6f4] rounded-lg overflow-hidden cursor-pointer">
            <img
              className="object-cover w-full h-[230px]"
              src={image}
              alt="shop1"
            />
            <div className="p-3">
              <p className="text-xs capitalize">{company}</p>
              <h3 className="text-lg font-semibold capitalize text-black">
                {name}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-600 text-base"> Rs {price}</p>
                {exists(id) ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                    className="bg-[#615e5c] text-white rounded-full w-10 h-10 flex justify-center items-center"
                  >
                    <BsFillCartCheckFill size={16} className="bg-transparent" />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onClick();
                    }}
                    className="bg-[#94634b] text-white rounded-full w-10 h-10 flex justify-center items-center"
                  >
                    <FaCartPlus size={16} className="bg-transparent" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </a>
      </>
    );
  }
   else{
    return(
      <article className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-10">
          <div className="relative h-48 w-10/12 md:w-7/12 lg:w-4/12 rounded">
              <img
                  alt={name}
                  className="h-full rounded bg-black object-cover w-full"
                  src={image}
              />
          </div>
          <footer className="w-full lg:w-8/12 flex flex-col gap-3 justify-center capitalize">
              <div>
                  <h4 className="font-bold text-black text-xl">{name}</h4>
                  <p className="text-gray-600 tracking-widest font-semibold"> Rs {price}</p>
              </div>
              <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic ...</p>
              <Link to={`/products/${id}`} className="btn bg-[#94634b] text-white w-max text-xs hover:bg-[#b68e7a]">
                  Details
              </Link>
          </footer>
      </article>
  )
   }
};

ShopItem.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  exists: PropTypes.func.isRequired,
  grid: PropTypes.bool.isRequired,
  shouldApplyFullWidth: PropTypes.bool.isRequired,
};

export default ShopItem;
