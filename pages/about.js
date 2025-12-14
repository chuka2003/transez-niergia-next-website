// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>About Us – Transez Nigeria</title>
        <meta name="description" content="Learn more about Transez Nigeria’s vision, mission, and leadership in electromechanical engineering and power services." />
      </Head>

      <Header />

      <main className="py-16 px-4 bg-white text-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="mb-4">
            Transez Nigeria Limited was founded to address Nigeria’s growing need for reliable, uninterrupted power and facility engineering. We specialize in delivering high-quality electrical, mechanical, and utility infrastructure services across industrial and commercial sectors.
          </p>
          <p className="mb-4">
            Our team of engineers and technicians are dedicated to providing sustainable and innovative solutions tailored to the unique power and infrastructure needs of our clients.
          </p>
          <p>
            With a track record of delivering complex projects on time and within budget, we remain committed to quality, safety, and long-term client satisfaction.
          </p>
        </div>
      </main>

      <Footer currentYear={currentYear} />
    </>
  );
}
