import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-indigo-600">Social.AI</h1>
        <div className="space-x-6 font-semibold text-md">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/features" className="hover:text-indigo-500">Features</Link>
          <Link to="/pricing" className="hover:text-indigo-500">Pricing</Link>
          <Link to="/about" className="hover:text-indigo-500">About</Link>
          <Link to="/contact" className="hover:text-indigo-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
