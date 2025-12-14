// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Contact Us – Transez Nigeria</title>
        <meta name="description" content="Reach out to Transez Nigeria for engineering solutions, service quotes, or technical support." />
      </Head>

      <Header />

      <main className="py-16 px-4 bg-white text-gray-800">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="mb-6">
            We're here to help. Whether you're looking for a quote, need technical support, or want to learn more about our services, contact us today.
          </p>
          <ul className="mb-6 space-y-2">
            <li><strong>Phone:</strong> +234 803 000 0000</li>
            <li><strong>Email:</strong> info@transez-nigeria.com</li>
            <li><strong>Office:</strong> 5 Chief Sunday Ogunyade St, Gbagada, Lagos</li>
          </ul>
          <a href="mailto:info@transez-nigeria.com" className="bg-yellow-400 text-black px-6 py-3 rounded shadow hover:bg-yellow-300 inline-block">
            Send us an Email
          </a>
        </div>
      </main>

      <Footer currentYear={currentYear} />
    </>
  );
}
