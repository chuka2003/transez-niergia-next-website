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
          Power quality has become increasingly important for industrial and commercial clients, as modern information systems and control processes depend on equipment sensitive to power interruptions and disturbances. Transez provides solutions to existing power quality problems, addresses potential issues proactively, and offers recommendations to ensure optimal power quality for new or upgraded facilities:contentReference[oaicite:60]{index=60}.
        </p>
        <p className="mb-4">
          Poor power quality can hurt your productivity and bottom line. Our team has the know-how and technology to diagnose, solve, and even prevent power problems. We conduct site surveys, computer simulations, and equipment sensitivity assessments – invaluable services for improving your power system’s performance:contentReference[oaicite:61]{index=61} (correcting “performane” to **performance**). 
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Our Power Quality Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Power Factor Compensation:</strong> We implement electronic power factor correction to optimize your electrical system’s efficiency:contentReference[oaicite:62]{index=62}. Improving power factor (bringing it close to 1) can reduce utility penalties, free up system capacity, support voltage stability, and cut down system losses (often yielding a return on investment within 1–2 years):contentReference[oaicite:63]{index=63}:contentReference[oaicite:64]{index=64}.
          </li>
          <li>
            <strong>Voltage Control:</strong> We provide advanced voltage control products that protect and monitor your electrical installations, switchboards, and industrial equipment. Our solutions ensure stable voltage supply and protect sensitive electronics in plants and machinery:contentReference[oaicite:65]{index=65}.
          </li>
          <li>
            <strong>Lightning &amp; Surge Protection:</strong> Transez offers a full range of surge protection devices to guard against lightning strikes, utility switching surges, motor start transients, and more. Each solution is independently tested and backed by top engineering support. By deploying proven lightning/surge protectors (from partners like DEHN + SÖHNE and CITEL), we safeguard your facilities from unpredictable lightning damage and power surges:contentReference[oaicite:66]{index=66}:contentReference[oaicite:67]{index=67}.
          </li>
          <li>
            <strong>Harmonics Filtration:</strong> We install active harmonic filters that continuously monitor your power network and dynamically filter out harmful harmonics (typically from 3rd up to 51st order):contentReference[oaicite:68]{index=68}:contentReference[oaicite:69]{index=69}. By injecting compensating currents, our filters restore a clean sine wave and reduce Total Harmonic Distortion to below 5%, in line with IEEE 519 standards:contentReference[oaicite:70]{index=70}. These compact, high-speed systems adapt to rapid load changes, preventing damage and inefficiency caused by non-linear loads.
          </li>
          <li>
            <strong>Uninterruptible Power Supply (UPS):</strong> We supply and install high-quality pure sine wave inverters (Su-Kam DSP series) that provide seamless backup power:contentReference[oaicite:71]{index=71}. Our UPS solutions can run everything from lights and computers to air conditioners and elevators in a cost-effective manner, making them a reliable alternative to generators for many applications:contentReference[oaicite:72]{index=72}:contentReference[oaicite:73]{index=73}. These inverters deliver regulated, 100% pure power with low running costs and features like extended backup time, 300% surge capacity, cold-start capability, and compatibility with generator systems:contentReference[oaicite:74]{index=74}:contentReference[oaicite:75]{index=75}. *(The original page also included an extensive battery maintenance guide, which can be provided as a knowledge-base article if needed.)*
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default PowerQualityPage;
