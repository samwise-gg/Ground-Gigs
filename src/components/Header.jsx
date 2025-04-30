import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 border-b border-purple-700 bg-[#131322] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Ground Gigs</h1>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/about" className="hover:text-purple-400">About</Link>
          <Link to="/services" className="hover:text-purple-400">Services</Link>
          <Link to="/contact" className="hover:text-purple-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}