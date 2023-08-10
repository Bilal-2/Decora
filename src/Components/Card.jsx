import React from 'react'
import chair from '../assets/Stock Images/testchair.jpg'
import { useState } from 'react';



// function Stars( rating ) {

//   const renderStars = () => {
//     const starCount = 5; // Total number of stars
//     const fullStars = Math.floor(rating); // Number of full stars
//     const halfStar = rating % 1 !== 0; // Check if there is a half star


//     const stars = [];

//     // Full stars
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <svg
//           key={`star-${i}`}
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-yellow-500 fill-current  bg-transparent"
//           viewBox="0 0 24 24"
//         >
//           <path
//             d="M12 2L9.09 8.81 2 9.27l6 5.19-1.82 7.09 7.46-4.27 7.46 4.27-1.82-7.09 6-5.19-7.09-.46z"
//           />
//         </svg>
//       );
//     }

//     // Half star
//     if (halfStar) {
//       stars.push(
//         <svg
//           key={`star-half`}
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-yellow-500 fill-current bg-transparent"
//           viewBox="0 0 24 24"
//         >
//           <path
//             d="M12 .75l-3.09 6.06-6.91.94 5 4.32-1.82 7.09 7.46-4.27 7.46 4.27-1.82-7.09 5-4.32-6.91-.94z"
//           />
//         </svg>
//       );
//     }

//     // Empty stars
//     for (let i = 0; i < starCount - Math.ceil(rating); i++) {
//       stars.push(
//         <svg

//           key={`star-empty-${i}`}
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-gray-300 fill-current bg-transparent"
//           viewBox="0 0 24 24"
//         >
//           <path
//             d="M12 2L9.09 8.81 2 9.27l6 5.19-1.82 7.09 7.46-4.27 7.46 4.27-1.82-7.09 6-5.19-7.09-.46z"
//           />
//         </svg>
//       );
//     }

//     return stars;
//   };

//   return (
//     <div className='bg-transparent'>

//       <div className="flex items-center bg-transparent">{renderStars()}</div>
//     </div>
//   );

// }

function Stars(rating) {
  const renderStars = () => {
    const starCount = 5; // Total number of stars
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
   

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`star-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500 fill-current bg-transparent"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L9.09 8.81 2 9.27l6 5.19-1.82 7.09 7.46-4.27 7.46 4.27-1.82-7.09 6-5.19-7.09-.46z"
          />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key={`star-half`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500 fill-current bg-transparent"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .75l-3.09 6.06-6.91.94 5 4.32-1.82 7.09 7.46-4.27 7.46 4.27-1.82-7.09 5-4.32-6.91-.94z"
          />
        </svg>
      );
    }

    // Empty stars
    for (let i = 0; i < starCount - fullStars - (hasHalfStar ? 1 : 0); i++) {
      stars.push(
        <svg
          key={`star-empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-300 fill-current bg-transparent"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L9.09 8.81 2 9.27l6 5.19-1.82 7.09 7.46-4.27 7.46 4.27-1.82-7.09 6-5.19-7.09-.46z"
          />
        </svg>
      );
    }

    return stars;
  };

  return <div className="flex items-center bg-transparent">{renderStars()}</div>;
}


export default function Card() {
  const productData = {

    title: 'Chair',
    image: chair,
    imageName: "Chair",
    rating: 2.5,
    price: 2499


    // Add more products with their respective ratings here
  };

  const [isHover, setIsHover] = useState(false)

  return (
    <div className='inline-block '>
      <div className='   inline-block'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >


        <div className='aspect-h-[20rem]  aspect-w-[20rem]  '>
          <img src={productData.image} alt={productData.imageName}
            className={`rounded-xl ${isHover ? 'transition cursor-pointer drop-shadow-2xl' : 'drop-shadow-2xl:hidden'
              } `}
          ></img>

        </div>


        <div className='aspect-h-[8rem] aspect-w-[20rem]'>


          <div className='relative  bg-transparent  pt-4 '>

            <div className='bg-transparent mb-2'>
              {Stars(productData.rating)}

            </div>

            <h1 className=' bg-transparent text-[1.3rem] mb-2 inline-block cursor-pointer'>


              {productData.title}

            </h1>

            <h1 className=' bg-transparent text-[1.15rem] text-textcolor2'>
              Rs {productData.price}
            </h1>


            <button className={`absolute bottom-3  px-7 py-3 right-0 bg-btncolor1 text-white text-[1.12rem] transform hover:bg-btncolor2  rounded-xl
            ${isHover ? '' : 'hidden'
              }`}>
              Add to Cart
            </button>
          </div>



        </div>




      </div>



    </div>
  )
}


