// pages/services.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Our Services – Transez Nigeria</title>
        <meta name="description" content="Discover Transez Nigeria’s engineering services including EPC, power quality solutions, generator maintenance, and more." />
      </Head>

      <Header />

      <main className="py-16 px-4 bg-gray-50 text-gray-800">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <ul className="space-y-6">
            <li>
              <h2 className="text-2xl font-semibold">EPC Services</h2>
              <p>
                Full mechanical and electrical design and build services including HVAC systems, lighting, fire protection, and water treatment installations.
              </p>
            </li>
            <li>
              <h2 className="text-2xl font-semibold">Power Quality Engineering</h2>
              <p>
                We implement power factor correction, harmonics mitigation, surge protection, and load balancing systems to stabilize power across critical infrastructure.
              </p>
            </li>
            <li>
              <h2 className="text-2xl font-semibold">Generator Maintenance</h2>
              <p>
                Preventive maintenance, breakdown repairs, and long-term servicing for generators of all capacities. On-call support and remote monitoring available.
              </p>
            </li>
            <li>
              <h2 className="text-2xl font-semibold">Energy Supply and Fuel Management</h2>
              <p>
                We provide fuel logistics, load assessments, utility onboarding and diesel dispatch management for reliable power continuity.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <Footer currentYear={currentYear} />
    </>
  );
}
