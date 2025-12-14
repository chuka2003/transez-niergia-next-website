// pages/careers.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Careers() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Careers – Transez Nigeria</title>
        <meta name="description" content="Join Transez Nigeria and help deliver the future of reliable energy and engineering infrastructure." />
      </Head>

      <Header />

      <main className="py-16 px-4 bg-gray-100 text-gray-800">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Careers at Transez</h1>
          <p className="mb-6">
            At Transez Nigeria, we are always looking for talented professionals who are passionate about solving Nigeria’s energy and engineering challenges. From technical experts to business strategists, we welcome individuals eager to make a lasting impact.
          </p>
          <p className="mb-4">
            If you're ready to grow your career in a dynamic and mission-driven environment, explore our openings below or contact us to express your interest.
          </p>
          <p className="italic">Currently accepting general applications. Please check back for new openings.</p>
        </div>
      </main>

      <Footer currentYear={currentYear} />
    </>
  );
}