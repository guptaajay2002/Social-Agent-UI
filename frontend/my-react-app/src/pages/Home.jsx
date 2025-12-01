// import { Link } from "react-router-dom";
// import FAQ from "./FAQ";

// function Home() {
//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center pt-32 pb-20 min-h-screen">
//       <h1 className="text-5xl font-bold mb-4">Automate Your Social Growth</h1>
//       <p className="text-lg mb-8">Social.AI helps you generate content, schedule posts, and track engagement across platforms.</p>
//       <div className="space-x-4">
//         <Link to="/pricing" className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50">See Pricing</Link>
//         <Link to="/features" className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600">Explore Features</Link>
//       </div>
//       <FAQ />
//     </div>
    
//   );
// }
// export default Home;
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 🔹 Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center pt-32 pb-20">
        <h1 className="text-5xl font-bold mb-4">Automate Your Social Growth</h1>
        <p className="text-lg mb-8">
          Social.AI helps you generate content, schedule posts, and track engagement across platforms.
        </p>
        <div className="space-x-4">
          <Link
            to="/pricing"
            className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300"
          >
            See Pricing
          </Link>
          <Link
            to="/features"
            className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
          >
            Explore Features
          </Link>
        </div>
      </section>

      {/* 🔹 Smooth Transition Background for FAQ */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-20 transition-all duration-700">
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
