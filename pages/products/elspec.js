import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ElspecPage = () => {
  return (
    <>
      <Head>
        <title>Elspec Power Quality Products | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Elspec Power Quality Products</h1>

        {/* Equalizer */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">EQUALIZER</h2>
          <p className="mb-2">
            <em>A world-leading solution for electrical energy savings and power quality improvement.</em> The Equalizer is the world's fastest real-time power quality enhancement system. It provides cycle-by-cycle reactive power compensation, optimizing power factor correction, energy savings, voltage support, and harmonic filtration for dynamic loads. Key benefits include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Accurate, cycle-by-cycle reactive power compensation for improved energy savings</li>
            <li>Transient-free solid-state capacitor switching</li>
            <li>Optional harmonic filtration with an integrated power quality analyzer</li>
            <li>Self-testing and comprehensive monitoring with minimal maintenance</li>
            <li>Handles voltages up to 690V (higher with step-up transformers) and unlimited kVAr capacity</li>
          </ul>
          <p className="mb-2">
            <strong>Equalizer RT:</strong> A variant designed to provide substantial reactive power during deep voltage sags. It delivers boosted kVAr for short-term voltage dips, ensuring stability during severe sag events.
          </p>
          <p className="mb-2">
            <strong>Equalizer ST:</strong> A real-time dynamic reactive power compensation system for motor start-ups. It offers the ultimate motor-start solution, protecting against voltage drop during large motor start-ups.
          </p>
        </section>

        {/* Activar */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">ACTIVAR</h2>
          <p className="mb-2">
            <em>A cost-effective alternative to electro-mechanical capacitor banks.</em> The Activar provides fast, transient-free reactive power compensation with unlimited operations. It is a low-cost solution to replace traditional power factor correction systems. Benefits of Activar include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Fast switching (typically 1s, max 3-4s) with unlimited transient-free operations</li>
            <li>Prevents damage to sensitive equipment by maintaining accurate power factor even with harmonics</li>
            <li>Energy-saving and virtually maintenance-free with extremely long life expectancy</li>
            <li>Built-in power quality analyzer with self-testing and reporting features</li>
            <li>Easy upgrade path to the Equalizer system</li>
          </ul>
        </section>

        {/* G4400 BlackBox */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">G4400 BLACKBOX – Fixed Power Quality Analyzer</h2>
          <p className="mb-2">
            The Elspec G4400 BlackBox is a next-generation fixed Power Quality Analyzer. It records all network parameters continuously (using the patented PQZIP compression) with no need for thresholds or triggers, capturing every event for up to a year. Key features:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Absolute capture of all power quality events – no missed events due to unique no-trigger design</li>
            <li>Stores waveforms of every cycle (up to 1,024 samples/cycle) for up to a year</li>
            <li>PQZIP compression (~1000:1) for efficient long-term data storage</li>
            <li>Time-synchronized data from multiple units (0.1 ms resolution) for root cause analysis</li>
            <li>Comprehensive post-analysis of RMS, harmonics, etc., with unlimited parameters</li>
            <li>Built-in web server for remote monitoring; supports Modbus/TCP, DNP, and SCADA integration</li>
            <li>Modular design (up to 9 modules), dual Ethernet ports with PoE, USB and RS-485 interfaces</li>
            <li>Wide range: handles 10× nominal voltage/current without loss of accuracy; Class A compliance (IEC 61000-4-30)</li>
          </ul>
        </section>

        {/* G4500 BlackBox */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">G4500 BLACKBOX – Portable Power Quality Analyzer</h2>
          <p className="mb-2">
            Built on the same innovative technology as the fixed BlackBox, the Elspec G4500 BlackBox is a portable power quality meter that logs all data continuously for over a year. Dubbed “Power Quality in High Definition,” it has an internal battery and Wi-Fi connectivity for remote analysis. Key benefits include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>No thresholds needed – captures every event with 1+ year of continuous logging</li>
            <li>Cycle-by-cycle data for RMS, frequency, and harmonics trends</li>
            <li>1024 samples/cycle (voltage) and 256 samples/cycle (current) for high-resolution capture</li>
            <li>Built-in web server for easy data retrieval via any web browser</li>
            <li>Integrated Wi-Fi (802.11b/g) access point and Ethernet router for remote monitoring</li>
            <li>Includes PQSCADA/Investigator software for advanced analysis and automatic EN50160 reports</li>
            <li>All-inclusive kit (flexible current probes, voltage leads, carry case, etc.) for a complete portable solution</li>
          </ul>
        </section>

        {/* G3500 BlackBox */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">G3500 BLACKBOX – Portable Power Quality Analyzer</h2>
          <p className="mb-2">
            The Elspec G3500 BlackBox is another portable analyzer in the BlackBox family, offering high-definition power quality monitoring at a competitive price point. It continuously logs all data with no gaps, ensuring you never miss an event. Benefits mirror the G4500, including:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>No missed events – continuous logging of all parameters (no triggers required)</li>
            <li>Cycle-by-cycle capture of RMS, frequency, and harmonics</li>
            <li>Built-in battery for up to 2 hours standby, enabling safe data capture during outages</li>
            <li>Automatic setup with self-identifying probes (plug-and-play ease)</li>
            <li>Includes analysis software (PQSCADA/Investigator) for report generation (EN50160 compliance, etc.)</li>
            <li>Long lifespan and robust design suitable for various industrial environments</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ElspecPage;
