import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { menus } from "./menus";
import { Link } from "react-router-dom";
import { FaUserGear } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { VscSymbolMisc } from "react-icons/vsc";
import { MdOutlineCategory } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";


import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/api/usersApiSlice";
import { logout } from "../redux/features/auth/authSlice";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuBerger = () => {
    setMobileMenu(!mobileMenu);
  };
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="  sticky top-0 z-50 bg-[#645832] backdrop-blur-md ">
      <div className="container md:w-5/6 w-full mx-0 pt-5 pb-7 px-2 md:px-0  ">
        <div className="lg:mx-[5rem] w-full flex justify-between items-center">
          <div className="w-40">
            <Link
              to="/"
              className="font-semi text-4xl primary_font  text-white"
            >
              Decora
            </Link>
          </div>
          <div className="hidden md:block top-[100%]">
            <ul className="flex md:flex-row flex-col md:gap-10 gap-3">
              {menus?.map((menu, index) => (
                <li key={index}>
                  <Link to={menu?.link} className="font-semi text-white">
                    {menu?.name}
                  </Link>
                </li>
                
              ))}
              <li >
                  <Link to='/favorite' className="font-semi text-white">
                    Favorites 
                    
                      {/* <FavoritesCount /> */}
                  </Link>
                </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-6">
              <li>
                <Link to="/Cart" className="text-xl text-white">
                  <BsCart4 />
                </Link>
                <div className="absolute top-4 ">
                  {cartItems.length > 0 && (
                    <span>
                      <span className="px-1 py-0 text-sm text-black bg-white rounded-full">
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </span>
                    </span>
                  )}
                </div>
              </li>
              {!userInfo && (
                <li>
                  <Link to="/login" className="text-xl text-white">
                    <AiOutlineUser />
                  </Link>
                </li>
              )}
              {userInfo && (
                <li
                  className="text-xl text-white cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <FaUserGear />
                </li>
              )}
              {userInfo && (
                <>
                  {dropdownOpen && !userInfo.isAdmin && (
                    <div className="z-120 absolute top-[6rem] right-2 lg:right-[5rem] rounded-lg shadow-lg w-[10rem] bg-white ">
                      <ul className="flex  flex-col md:gap-10 gap-3 menu text-center text-black pb-3">
                        <li>
                          <Link
                            to="/profile"
                            className="text-xl text-black cursor-pointer"
                          >
                            <AiOutlineUser className="absolute top-[0.2rem] left-4" />{" "}
                            Profile
                          </Link>
                        </li>
                        <li
                          className="text-xl text-black cursor-pointer"
                          onClick={logoutHandler}
                        >
                          <CiLogout className="absolute top-[2.8rem] lg:top-[4.7rem] left-4" />{" "}
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}

                  {dropdownOpen && userInfo.isAdmin && (
                    <>
                      <div className="z-120 absolute top-[6rem] right-2 lg:right-[5rem] rounded-lg shadow-lg w-[10rem] bg-white ">
                        <ul className="flex  flex-col md:gap-10 gap-3 menu text-center text-black pb-3">
                          <li>
                            <Link
                              to="/admin/dashboard"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              <AiOutlineDashboard className="absolute top-[0.9rem] lg:top-[0.9rem] left-4" />
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/allproductslist"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              <VscSymbolMisc className="absolute top-[4.1rem] lg:top-[5.9rem] left-4" />
                              Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/categorylist"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              <MdOutlineCategory className="absolute top-[7.3rem] lg:top-[10.9rem] left-4" />
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/orderlist"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              <BsHandbag className="absolute top-[10.5rem] lg:top-[15.9rem] left-4" />
                              Orders
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin/userlist"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              <HiOutlineUsers className="absolute top-[13.7rem] lg:top-[20.9rem] left-4" />
                              Users
                            </Link>
                          </li>
                          <button
                            className="text-xl text-black cursor-pointer"
                            onClick={logoutHandler}
                          >
                            <CiLogout className="absolute top-[16.5rem] lg:top-[25.4rem] left-4" />{" "}
                            Logout
                          </button>
                        </ul>
                      </div>
                    </>
                  )}
                </>
              )}
              <li
                onClick={() => menuBerger()}
                className="md:hidden block text-white  w-min h-min "
              >
                <GiHamburgerMenu />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {mobileMenu && (
        <div className="z-120 absolute right-0 rounded-lg shadow-lg w-[20rem] bg-white  md:hidden block">
          <ul className="flex md:flex-row flex-col md:gap-10 gap-3 menu text-center text-black pb-3">
            {menus?.map((menu, index) => (
              <li key={index}>
                <Link to={menu?.link} className="font-semi">
                  {menu?.name}
                </Link>
              </li>
            ))}
            <li >
                  <Link to='/favorite' className="font-semi text-black">
                    Favorites 
                  </Link>
                </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Header;
