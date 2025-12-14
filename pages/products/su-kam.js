import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SuKamPage = () => {
  return (
    <>
      <Head>
        <title>Su-Kam Pure Sinewave Inverters | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Su-Kam Pure Sine Wave Inverters</h1>
        <p className="mb-4">
          <strong>A Healthier Alternative to Generators.</strong> Su-Kam’s DSP Pure Sine Wave Inverters (Colossal series) provide reliable, regulated, and stabilized power backup for all types of commercial establishments. They can run everything from lights and fans to air conditioners, elevators, and more – all in a cost-effective and silent manner.
        </p>
        <p className="mb-4">
          The power output from a Su-Kam inverter is often “purer” than grid power, making it 100% safe for even the most sensitive office equipment. Su-Kam inverters have proven to be a reliable alternative to generators in banks (ATMs), hospitals, petrol stations, shopping malls, and other applications, eliminating noise and fumes while providing uninterrupted power.
        </p>
        <h2 className="text-xl font-semibold mb-2">Available Inverter Models</h2>
        <ul className="list-disc list-inside pl-4">
          <li>800VA / 12V – <em>“Falcon”</em></li>
          <li>1400VA / 24V – <em>“Smiley”</em></li>
          <li>2.5KVA / 48V – <em>“Fusion”</em></li>
          <li>3.5KVA / 48V – <em>“Fusion”</em></li>
          <li>5KVA / 96V (1-Phase) – <em>“Colossal”</em></li>
          <li>7.5KVA / 120V (1-Phase) – <em>“Colossal”</em></li>
          <li>10KVA / 180V (1-Phase) – <em>“Colossal”</em></li>
          <li>15KVA / 360V (3-Phase) – <em>“Colossal”</em></li>
          <li>20KVA / 360V (3-Phase) – <em>“Colossal”</em></li>
          <li>25KVA / 360V (3-Phase) – <em>“Colossal”</em></li>
          <li>30KVA / 360V (3-Phase) – <em>“Colossal”</em></li>
          <li>40KVA / 360V (3-Phase) – <em>“Colossal”</em></li>
          <li>50KVA / 360V (3-Phase) – <em>“Colossal”</em></li>
        </ul>
        <p className="mt-4">
          <em>Note:</em> Each model comes with specific configurations (inverter unit, battery bank, trolley, etc.) and a comprehensive warranty from Su-Kam. In practice, these inverters have delivered clean, uninterrupted power with features like high surge handling (up to 300%), instant switch-over (UPS mode), extended backup time, overload protection, and more. For detailed specifications and pricing, please contact us or refer to the product datasheets.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default SuKamPage;
