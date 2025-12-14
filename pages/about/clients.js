import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ClientsPage = () => {
  return (
    <>
      <Head>
        <title>Our Clients | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Our Clients</h1>
        <p className="mb-4">
          Over the years, Transez Nigeria Limited has delivered solutions to a range of respected clients across various industries. Our clientele includes:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Skye Bank Plc</li>
          <li>Nigerian Airspace Management Agency (NAMA)</li>
          <li>First City Monument Bank (FCMB)</li>
          <li>Oceanic Bank Plc</li>
          <li>Fidelity Bank Plc</li>
          <li>SGS Nigeria</li>
          <li>Celtel Nigeria</li>
          <li>MTN Nigeria</li>
          <li>Resourcery Plc</li>
          <li>Presco Plc</li>
          <li>Zain Nigeria</li>
          <li>Sterling Bank Plc</li>
          <li>Vmobile Nigeria</li>
          <li>Airtel Nigeria</li>
          <li>Bank PHB Plc</li>
          <li>Practical Habitat Ltd</li>
          <li>Wakanow (Zebra Travels)</li>
          <li>Haansbro Nigeria Ltd</li>
          <li>Eko Electricity Distribution Co (EKEDC)</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ClientsPage;
