import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ image, desc, title, id }) => {
  return (
    <>
      <div className="relative h-60 w-72 overflow-hidden transform hover:scale-[1.1] ease-out duration-200 rounded-xl shadow-2xl">
        <img className="h-60 w-72" src={image} alt="Book Image" />
        <Link to={`/details/${id}`}>
          <div className="absolute  w-full p-2 bottom-0 bg-[rgba(255,255,255,0.705)] transform translate-y-[50%] duration-500 hover:translate-y-0 ease-in">
            <h3 className="text-3xl">{title}</h3>
            <p>{desc.slice(0, 100) + (desc.length > 100 ? "..." : "")}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;

// const Cards = ({ image, desc, title, id }) => {
//   return (
//     <div class="max-w-xs max-h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[300px] h-[400px] overflow-hidden">
//       <Link to={`/details/${id}`}>
//         <img
//           class="rounded-t-lg h-[200px] w-full object-contain"
//           src={image}
//           alt="Book image"
//         />
//       </Link>
//       <div class="p-5">
//         <Link to="#">
//           <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {title}
//           </h5>
//         </Link>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
//         <Link
//           to={`/details/${id}`}
//           class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Read more
//           <svg
//             class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cards;
