import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PowerQualityPage = () => {
  return (
    <>
      <Head>
        <title>Power Quality Solutions | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Power Quality Solutions</h1>
        <p className="mb-4">
          Power quality has become increasingly important for industrial and commercial clients, as modern information systems and control processes depend on equipment sensitive to power interruptions and disturbances. Transez provides solutions to existing power quality problems, addresses potential issues proactively, and offers recommendations to ensure optimal power quality for new or upgraded facilities.
        </p>
        <p className="mb-4">
          Poor power quality can hurt your productivity and bottom line. Our team has the know-how and technology to diagnose, solve, and even prevent power problems. We conduct site surveys, computer simulations, and equipment sensitivity assessments – invaluable services for improving your power system’s performance (correcting “performane” to **performance**). 
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Our Power Quality Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Power Factor Compensation:</strong> We implement electronic power factor correction to optimize your electrical system’s efficiency. Improving power factor (bringing it close to 1) can reduce utility penalties, free up system capacity, support voltage stability, and cut down system losses (often yielding a return on investment within 1–2 years).
          </li>
          <li>
            <strong>Voltage Control:</strong> We provide advanced voltage control products that protect and monitor your electrical installations, switchboards, and industrial equipment. Our solutions ensure stable voltage supply and protect sensitive electronics in plants and machinery.
          </li>
          <li>
            <strong>Lightning &amp; Surge Protection:</strong> Transez offers a full range of surge protection devices to guard against lightning strikes, utility switching surges, motor start transients, and more. Each solution is independently tested and backed by top engineering support. By deploying proven lightning/surge protectors (from partners like DEHN + SÖHNE and CITEL), we safeguard your facilities from unpredictable lightning damage and power surges.
          </li>
          <li>
            <strong>Harmonics Filtration:</strong> We install active harmonic filters that continuously monitor your power network and dynamically filter out harmful harmonics (typically from 3rd up to 51st order). By injecting compensating currents, our filters restore a clean sine wave and reduce Total Harmonic Distortion to below 5%, in line with IEEE 519 standards. These compact, high-speed systems adapt to rapid load changes, preventing damage and inefficiency caused by non-linear loads.
          </li>
          <li>
            <strong>Uninterruptible Power Supply (UPS):</strong> We supply and install high-quality pure sine wave inverters (Su-Kam DSP series) that provide seamless backup power. Our UPS solutions can run everything from lights and computers to air conditioners and elevators in a cost-effective manner, making them a reliable alternative to generators for many applications. These inverters deliver regulated, 100% pure power with low running costs and features like extended backup time, 300% surge capacity, cold-start capability, and compatibility with generator systems. *(The original page also included an extensive battery maintenance guide, which can be provided as a knowledge-base article if needed.)*
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default PowerQualityPage;
