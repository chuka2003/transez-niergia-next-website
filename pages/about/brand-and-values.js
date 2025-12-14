import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BrandValuesPage = () => {
  return (
    <>
      <Head>
        <title>Our Brand &amp; Values | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Our Brand &amp; Values</h1>
        <p className="mb-4">
          The Transez brand is built on trust, innovation, and customer-centric values. We pride ourselves on delivering electromechanical solutions with integrity and excellence, guided by the core principles that define our culture and drive our success.
        </p>
        <p>
          From our mission of ensuring uninterrupted, clean energy to our commitment to honesty, teamwork, and professionalism, every aspect of the Transez brand reflects our dedication to meeting and exceeding customer expectations.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default BrandValuesPage;
