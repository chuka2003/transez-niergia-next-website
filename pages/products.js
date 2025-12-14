// pages/products.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Products() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Products – Transez Nigeria</title>
        <meta name="description" content="Explore Transez Nigeria’s energy and facility products including stabilizers, inverters, and smart monitoring systems." />
      </Head>

      <Header />

      <main className="py-16 px-4 bg-white text-gray-800">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-8">Our Products</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <li>
              <h2 className="text-2xl font-semibold">Voltage Stabilizers</h2>
              <p>Industrial-grade voltage stabilizers for balancing power fluctuations and protecting sensitive equipment.</p>
            </li>
            <li>
              <h2 className="text-2xl font-semibold">Inverters & Backup Systems</h2>
              <p>Smart inverters, batteries, and backup power systems for homes, offices, and commercial facilities.</p>
            </li>
            <li>
              <h2 className="text-2xl font-semibold">Energy Monitoring Solutions</h2>
              <p>IoT-enabled tools to track and manage your energy usage in real-time from anywhere.</p>
            </li>
            <li>
              <h2 className="text-2xl font-semibold">Custom Control Panels</h2>
              <p>Tailored power control systems for integration into industrial or infrastructure environments.</p>
            </li>
          </ul>
        </div>
      </main>

      <Footer currentYear={currentYear} />
    </>
  );
}