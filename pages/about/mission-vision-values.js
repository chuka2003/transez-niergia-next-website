import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MissionVisionValuesPage = () => {
  return (
    <>
      <Head>
        <title>Mission, Vision &amp; Values | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Mission, Vision &amp; Values</h1>
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p className="mb-4">
          To be the number one utility solutions provider in sub-Saharan Africa.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-6">
          To guarantee uninterrupted, clean and efficient use of energy in Africa.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Guiding Principles</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Customer Focus:</strong> We anticipate, understand, and excel at meeting our customers’ needs, continually finding better technologies and solutions to serve them:contentReference[oaicite:2]{index=2}.
          </li>
          <li>
            <strong>Honesty &amp; Integrity:</strong> We foster a culture that values honesty and ethical practice, reinforcing our corporate values in everything we do:contentReference[oaicite:3]{index=3}.
          </li>
          <li>
            <strong>Team Spirit:</strong> We believe our people are our greatest asset. We promote teamwork, participation, and empowerment so that our combined skills achieve our primary objective – outstanding customer satisfaction:contentReference[oaicite:4]{index=4}.
          </li>
          <li>
            <strong>Professionalism:</strong> We approach every project with the highest professionalism, delivering specialized power engineering solutions without compromise to best practices:contentReference[oaicite:5]{index=5}.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default MissionVisionValuesPage;
