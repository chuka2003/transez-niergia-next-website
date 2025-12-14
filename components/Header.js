// components/Header.js
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Transez Nigeria</div>
        <nav className="hidden md:flex gap-6">
          <a href="/about" className="hover:text-yellow-400">About</a>
          <a href="/services" className="hover:text-yellow-400">Services</a>
          <a href="/products" className="hover:text-yellow-400">Products</a>
          <a href="/careers" className="hover:text-yellow-400">Careers</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
