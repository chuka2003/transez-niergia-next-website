import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EPCPage = () => {
  return (
    <>
      <Head>
        <title>Engineering, Procurement &amp; Construction | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Engineering, Procurement &amp; Construction</h1>
        <p className="mb-4">
          Transez has a well-qualified, experienced, and dedicated team of engineers and support staff, enabling us to offer modern, innovative concepts for your projects. From design specifications to HVAC systems, you can always rely on Transez to deliver robust solutions. Our Mechanical &amp; Electrical services have a proven track record across many market sectors, and we confidently provide innovative and sustainable solutions covering all aspects of design, coordination, installation, and commissioning of a project’s M&amp;E requirements.
        </p>
        <p className="mb-4">
          Both our mechanical and electrical departments work closely together to ensure a coordinated implementation that all stakeholders can be proud of. Our clients have seen the benefits of our high staff retention rate – an experienced and knowledgeable team coordinates multi-service installations with minimal disruption to the client and other trades. Our engineers’ long-term collaboration has developed skills that allow services to be installed seamlessly alongside building fabrics and other systems.
        </p>
        <p className="mb-4">
          We believe the Transez engineering team will bring innovation, experience, commitment, quality, flexibility, and pride to any project we undertake, delivering results that exceed expectations.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Our M&amp;E Service Capabilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Heating, Ventilation &amp; Air Conditioning (HVAC) Systems:</strong> We repair, design, and install residential and commercial HVAC systems (air conditioning, heating, fire sprinklers, boilers, plumbing), offering prompt, reliable service with high energy efficiency.
          </li>
          <li>
            <strong>Commercial Kitchen Design &amp; Build:</strong> We provide end-to-end commercial kitchen solutions – from early-stage design and feasibility, to procuring and installing equipment – ensuring the kitchen meets client concepts and needs with a job well done.
          </li>
          <li>
            <strong>Clean Room Design &amp; Build:</strong> We have the expertise to design and supply advanced clean rooms with impeccable standards, ensuring clients get quality-proven products and benefitting from our extensive experience.
          </li>
          <li>
            <strong>Plumbing &amp; Drainage Systems:</strong> We supply and install complete plumbing systems including water storage tanks, piping, drainage, mains water supply, sewage systems, sanitary fixtures, ventilation for restrooms, and hot water systems.
          </li>
          <li>
            <strong>Fire Protection &amp; Fighting Systems:</strong> We provide reliable fire-fighting solutions – quality fire protection equipment, pumps, and valves – that will deliver water and suppression when it’s needed most, ensuring safety and compliance.
          </li>
          <li>
            <strong>Plumbing Systems Design:</strong> Our plumbing engineers design systems for design/build projects, adhering to building codes and standards. We tailor designs to application-specific needs (volume, temperature, purity, storage, disposal) to ensure optimal performance.
          </li>
          <li>
            <strong>Electrical Power Distribution:</strong> We build, maintain, and repair power distribution networks. From electrical service layout and branch wiring to final equipment hook-up and testing, we deliver turnkey solutions for uninterrupted electricity supply.
          </li>
          <li>
            <strong>Power &amp; Energy Audit:</strong> We offer comprehensive energy audits for residential, commercial, and industrial facilities. With over 250 audits completed, we provide benchmark metrics and actionable recommendations to save energy costs and reduce emissions.
          </li>
          <li>
            <strong>Illumination &amp; Lighting Systems:</strong> We supply a wide range of lighting products (covering all major brands, including hard-to-find items) and expert lighting design services. Our consultants introduce the latest, energy-efficient lighting solutions, supported by a highly trained team.
          </li>
          <li>
            <strong>Electrical Power Generation (Generators):</strong> We supply generator sets and offer full service/maintenance for backup power systems. Our generator services team can handle all your power generation needs and provides 24/7 emergency support.
          </li>
          <li>
            <strong>Detection &amp; Alarm Systems:</strong> We install innovative detection and alarm systems with unbeatable accuracy. Our solutions provide coordinated alerts of imminent dangers so issues can be addressed before any harm is done.
          </li>
          <li>
            <strong>Electronic Security Systems:</strong> We design, install, and maintain electronic security systems tailored to your requirements. Our solutions come with flexible support programs and are delivered with a commitment to quality and customer satisfaction.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default EPCPage;
