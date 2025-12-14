// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Transez Nigeria – Electromechanical & Power Solutions</title>
        <meta name="description" content="Electromechanical engineering, power quality solutions, and facility services for uninterrupted clean power in Nigeria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Transez Nigeria – Powering Your Business" />
        <meta property="og:description" content="Reliable power and engineering services for facilities and infrastructure in Nigeria." />
        <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=Transez+Nigeria" />
      </Head>

      <Header />

      <main>
        <section className="bg-cover bg-center text-white relative" style={{ backgroundImage: 'url(https://via.placeholder.com/1600x600.png?text=Transez+Hero)' }}>
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="container mx-auto relative z-10 text-center py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Powering Nigeria with Clean, Reliable Energy</h1>
            <p className="text-lg md:text-xl mb-6">Engineering, power quality, and facility solutions for forward-thinking infrastructure</p>
            <a href="/contact" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-300">Contact Us</a>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-10">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">EPC Services</h3>
                <p className="text-gray-600">Full mechanical and electrical facilities engineering including HVAC, fire, plumbing and lighting systems.</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">Power Quality</h3>
                <p className="text-gray-600">Power factor correction, voltage control, harmonics filtration, and surge protection services.</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">Generator Maintenance</h3>
                <p className="text-gray-600">Comprehensive generator servicing, repairs and preventive maintenance plans.</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">Energy Supply</h3>
                <p className="text-gray-600">Fuel logistics, load management, and utility power sourcing solutions for critical facilities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">About Transez Nigeria</h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg text-center">
              Transez Nigeria Limited is a specialist engineering and facility management company delivering uninterrupted power and infrastructure solutions to clients across Nigeria. Our mission is to engineer stability through innovation, quality, and dedicated service.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-10">Our Clients & Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="bg-white p-4 rounded shadow">Client A</div>
              <div className="bg-white p-4 rounded shadow">Client B</div>
              <div className="bg-white p-4 rounded shadow">Partner X</div>
              <div className="bg-white p-4 rounded shadow">Partner Y</div>
            </div>
          </div>
        </section>
      </main>

      <Footer currentYear={currentYear} />
    </>
  );
}
