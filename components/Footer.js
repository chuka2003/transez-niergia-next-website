// components/Footer.js
export default function Footer({ currentYear }) {
  return (
    <footer className="bg-gray-800 text-gray-300 text-sm py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {currentYear} Transez Nigeria Limited</p>
        <p>5 Chief Sunday Ogunyade St, Gbagada, Lagos</p>
      </div>
    </footer>
  );
}
