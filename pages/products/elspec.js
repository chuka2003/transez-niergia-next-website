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
            <em>A world-leading solution for electrical energy savings and power quality improvement.</em> The Equalizer is the world's fastest real-time power quality enhancement system. It provides cycle-by-cycle reactive power compensation, optimizing power factor correction, energy savings, voltage support, and harmonic filtration for dynamic loads:contentReference[oaicite:84]{index=84}. Key benefits include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Accurate, cycle-by-cycle reactive power compensation for improved energy savings:contentReference[oaicite:85]{index=85}</li>
            <li>Transient-free solid-state capacitor switching</li>
            <li>Optional harmonic filtration with an integrated power quality analyzer</li>
            <li>Self-testing and comprehensive monitoring with minimal maintenance</li>
            <li>Handles voltages up to 690V (higher with step-up transformers) and unlimited kVAr capacity:contentReference[oaicite:86]{index=86}</li>
          </ul>
          <p className="mb-2">
            <strong>Equalizer RT:</strong> A variant designed to provide substantial reactive power during deep voltage sags. It delivers boosted kVAr for short-term voltage dips, ensuring stability during severe sag events:contentReference[oaicite:87]{index=87}.
          </p>
          <p className="mb-2">
            <strong>Equalizer ST:</strong> A real-time dynamic reactive power compensation system for motor start-ups. It offers the ultimate motor-start solution, protecting against voltage drop during large motor start-ups:contentReference[oaicite:88]{index=88}.
          </p>
        </section>

        {/* Activar */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">ACTIVAR</h2>
          <p className="mb-2">
            <em>A cost-effective alternative to electro-mechanical capacitor banks.</em> The Activar provides fast, transient-free reactive power compensation with unlimited operations. It is a low-cost solution to replace traditional power factor correction systems:contentReference[oaicite:89]{index=89}. Benefits of Activar include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Fast switching (typically 1s, max 3-4s) with unlimited transient-free operations:contentReference[oaicite:90]{index=90}</li>
            <li>Prevents damage to sensitive equipment by maintaining accurate power factor even with harmonics</li>
            <li>Energy-saving and virtually maintenance-free with extremely long life expectancy:contentReference[oaicite:91]{index=91}</li>
            <li>Built-in power quality analyzer with self-testing and reporting features:contentReference[oaicite:92]{index=92}</li>
            <li>Easy upgrade path to the Equalizer system</li>
          </ul>
        </section>

        {/* G4400 BlackBox */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">G4400 BLACKBOX – Fixed Power Quality Analyzer</h2>
          <p className="mb-2">
            The Elspec G4400 BlackBox is a next-generation fixed Power Quality Analyzer:contentReference[oaicite:93]{index=93}. It records all network parameters continuously (using the patented PQZIP compression) with no need for thresholds or triggers, capturing every event for up to a year:contentReference[oaicite:94]{index=94}:contentReference[oaicite:95]{index=95}. Key features:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Absolute capture of all power quality events – no missed events due to unique no-trigger design:contentReference[oaicite:96]{index=96}</li>
            <li>Stores waveforms of every cycle (up to 1,024 samples/cycle) for up to a year:contentReference[oaicite:97]{index=97}</li>
            <li>PQZIP compression (~1000:1) for efficient long-term data storage:contentReference[oaicite:98]{index=98}</li>
            <li>Time-synchronized data from multiple units (0.1 ms resolution) for root cause analysis:contentReference[oaicite:99]{index=99}</li>
            <li>Comprehensive post-analysis of RMS, harmonics, etc., with unlimited parameters</li>
            <li>Built-in web server for remote monitoring; supports Modbus/TCP, DNP, and SCADA integration:contentReference[oaicite:100]{index=100}</li>
            <li>Modular design (up to 9 modules), dual Ethernet ports with PoE, USB and RS-485 interfaces:contentReference[oaicite:101]{index=101}</li>
            <li>Wide range: handles 10× nominal voltage/current without loss of accuracy; Class A compliance (IEC 61000-4-30):contentReference[oaicite:102]{index=102}</li>
          </ul>
        </section>

        {/* G4500 BlackBox */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">G4500 BLACKBOX – Portable Power Quality Analyzer</h2>
          <p className="mb-2">
            Built on the same innovative technology as the fixed BlackBox, the Elspec G4500 BlackBox is a portable power quality meter that logs all data continuously for over a year:contentReference[oaicite:103]{index=103}. Dubbed “Power Quality in High Definition,” it has an internal battery and Wi-Fi connectivity for remote analysis. Key benefits include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>No thresholds needed – captures every event with 1+ year of continuous logging:contentReference[oaicite:104]{index=104}:contentReference[oaicite:105]{index=105}</li>
            <li>Cycle-by-cycle data for RMS, frequency, and harmonics trends</li>
            <li>1024 samples/cycle (voltage) and 256 samples/cycle (current) for high-resolution capture:contentReference[oaicite:106]{index=106}</li>
            <li>Built-in web server for easy data retrieval via any web browser:contentReference[oaicite:107]{index=107}</li>
            <li>Integrated Wi-Fi (802.11b/g) access point and Ethernet router for remote monitoring:contentReference[oaicite:108]{index=108}</li>
            <li>Includes PQSCADA/Investigator software for advanced analysis and automatic EN50160 reports:contentReference[oaicite:109]{index=109}</li>
            <li>All-inclusive kit (flexible current probes, voltage leads, carry case, etc.) for a complete portable solution:contentReference[oaicite:110]{index=110}</li>
          </ul>
        </section>

        {/* G3500 BlackBox */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">G3500 BLACKBOX – Portable Power Quality Analyzer</h2>
          <p className="mb-2">
            The Elspec G3500 BlackBox is another portable analyzer in the BlackBox family, offering high-definition power quality monitoring at a competitive price point:contentReference[oaicite:111]{index=111}. It continuously logs all data with no gaps, ensuring you never miss an event. Benefits mirror the G4500, including:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>No missed events – continuous logging of all parameters (no triggers required)</li>
            <li>Cycle-by-cycle capture of RMS, frequency, and harmonics</li>
            <li>Built-in battery for up to 2 hours standby, enabling safe data capture during outages:contentReference[oaicite:112]{index=112}</li>
            <li>Automatic setup with self-identifying probes (plug-and-play ease):contentReference[oaicite:113]{index=113}</li>
            <li>Includes analysis software (PQSCADA/Investigator) for report generation (EN50160 compliance, etc.):contentReference[oaicite:114]{index=114}</li>
            <li>Long lifespan and robust design suitable for various industrial environments</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ElspecPage;
