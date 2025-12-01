// function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-10 mt-16">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
//         {/* Left Section - Brand */}
//         <h2 className="text-2xl font-extrabold tracking-wide mb-6 md:mb-0 hover:scale-105 transition-transform duration-300">
//           Social.AI
//         </h2>

//         {/* Center Section - Social Icons */}
//         <div className="flex space-x-6 text-2xl">
//           <a
//             href="#"
//             className="hover:text-pink-400 transition-all transform hover:scale-125"
//             title="Instagram"
//           >
//             <i className="bi bi-instagram"></i>
//           </a>
//           <a
//             href="#"
//             className="hover:text-blue-400 transition-all transform hover:scale-125"
//             title="LinkedIn"
//           >
//             <i className="bi bi-linkedin"></i>
//           </a>
//           <a
//             href="#"
//             className="hover:text-gray-300 transition-all transform hover:scale-125"
//             title="X (Twitter)"
//           >
//             <i className="bi bi-twitter-x"></i>
//           </a>
//           <a
//             href="#"
//             className="hover:text-red-400 transition-all transform hover:scale-125"
//             title="YouTube"
//           >
//             <i className="bi bi-youtube"></i>
//           </a>
//         </div>

//         {/* Right Section - Copyright */}
//         <p className="mt-6 md:mt-0 text-sm font-medium tracking-wide">
//           © {new Date().getFullYear()} Social.AI. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }


function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-6 fixed bottom-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* Left Section - Brand */}
        <h2 className="text-2xl font-extrabold tracking-wide mb-6 md:mb-0 hover:scale-105 transition-transform duration-300">
          Social.AI
        </h2>

        {/* Center Section - Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="#"
            className="hover:text-pink-400 transition-all transform hover:scale-125"
            title="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-all transform hover:scale-125"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-all transform hover:scale-125"
            title="X (Twitter)"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
          <a
            href="#"
            className="hover:text-red-400 transition-all transform hover:scale-125"
            title="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        {/* Right Section - Copyright */}
        <p className="mt-6 md:mt-0 text-md font-medium tracking-wide">
          © {new Date().getFullYear()} Social.AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
