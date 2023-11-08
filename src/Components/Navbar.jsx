import React, { useState } from "react";
//import { styles } from '../UiStyle';

export default function Navbar() {
  // const [toggle, setToggle] = useState(false)
  return (
    // <nav className={`${styles.paddingX} flex flex-row gap-10 w-full items-center py-4  fixed top-0 z-20 bg-transparent`}>
    //   <div className='cursor-pointer bg-transparent' onClick={() => setToggle(!toggle)}>
    //     Shop
    //   </div>

    //   <div className='grid grow justify-items-center  bg-transparent w-10px'>
    //     <div className='cursor-pointer bg-transparent text-bold' >
    //       Decora
    //     </div>

    //   </div>
    //   <div className='cursor-pointer bg-transparent'>
    //     Bag
    //   </div>

    // </nav>
    <div className="navbar  bg-transparent fixed top-0 z-20">
      <div className="navbar-start bg-transparent">
        <div className="dropdown bg-transparent ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  bg-transparent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-primary"
          >
            <li className=" bg-transparent text-black">
              <a>Homepage</a>
            </li>
            <li className=" bg-transparent">
              <a>Portfolio</a>
            </li>
            <li className=" bg-transparent">
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center bg-transparent">
        <a className="btn btn-ghost normal-case text-xl bg-transparent">
          Decora
        </a>
      </div>
      <div className="navbar-end bg-transparent">
        <button className="btn btn-ghost btn-circle bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 bg-transparent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="dropdown dropdown-end bg-transparent">
          <label tabIndex={0} className="btn btn-ghost btn-circle bg-transparent">
            <div className="indicator bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-transparent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item ">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body   bg-transparent">
              <span className="font-bold text-lg bg-transparent text-black  ">8 Items</span>
              <span className=" text-black">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-neutral btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
