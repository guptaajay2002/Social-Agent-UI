// import FAQ from "./FAQ";

// function Pricing() {
//   const plans = [
//     { name: 'Starter', price: '₹0', features: ['1 user', 'Basic templates', 'Community support'] },
//     { name: 'Pro', price: '₹1,499/mo', features: ['3 users', 'AI captions', 'Scheduling', 'Email support'] },
//     { name: 'Business', price: '₹4,999/mo', features: ['10 users', 'All features', 'Priority support'] },
//   ]

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 flex flex-col items-center py-16">
//       <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-4">Simple, transparent pricing</h2>
//       <p className="text-gray-600 text-2xl mb-12">Choose a plan that grows with you.</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl w-full">
//         {plans.map((t) => (
//           <div key={t.name} className={`relative rounded-2xl border ${
//           plans.highlighted
//             ? "border-transparent bg-gradient-to-br from-indigo-500 to-blue-500 p-[2px] shadow-2xl"
//             : "border-gray-200 shadow-md"
//         } transform transition-all duration-300 hover:scale-120 hover:shadow-2xl`}>
            
//             <h3 className="text-2xl text-center font-bold mb-4 mt-5">{t.name}</h3>
//             <div className="text-3xl font-bold mb-4 ml-5">{t.price}</div>
//             <ul className="text-gray-600 space-y-2 mb-8 text-md  font-bold ml-7">
//               {t.features.map((f) => <li key={f}>• {f}</li>)}
//             </ul>
//             <button className={`w-70 py-5 ml-7 mb-3 rounded-xl font-semibold transition-all duration-300 ${
//               plans.highlighted
//                 ? "bg-white text-indigo-600 hover:bg-gray-100"
//                 : "bg-indigo-600 text-white hover:bg-indigo-700"
//             }`}>
//               Get started
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// export default Pricing;
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

function Pricing() {
  const plans = [
    { name: 'Starter', price: '₹0', features: ['1 user', 'Basic templates', 'Community support'] },
    { name: 'Pro', price: '₹1,499/mo', features: ['3 users', 'AI captions', 'Scheduling', 'Email support'] },
    { name: 'Business', price: '₹4,999/mo', features: ['10 users', 'All features', 'Priority support'] },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 flex flex-col items-center py-16">
      <h2 className="text-4xl font-bold text-gray-900 mt-16 mb-4">Simple, transparent pricing</h2>
      <p className="text-gray-600 text-2xl mb-12">Choose a plan that grows with you.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl w-full">
        {plans.map((t) => (
          <div
            key={t.name}
            className="relative rounded-2xl border border-gray-200 shadow-md transform transition-all duration-300 hover:scale-120 hover:shadow-2xl"
          >
            <h3 className="text-2xl text-center font-bold mb-4 mt-5">{t.name}</h3>
            <div className="text-3xl font-bold mb-4 ml-5">{t.price}</div>
            <ul className="text-gray-600 space-y-2 mb-8 text-md font-bold ml-7">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            {/* Redirect to payment page with selected plan */}
            <Link to={`/payment/${t.name.toLowerCase()}`}>
              <button className="w-70 py-5 ml-7 mb-3 rounded-xl font-semibold transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-700">
                Get started
              </button>
            </Link>
          </div>
        ))}
      </div>

     
    </section>
  );
}

export default Pricing;
