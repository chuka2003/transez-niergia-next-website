import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Meet Our Team | Transez Nigeria</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Meet Our Team</h1>

        {/* Team Member 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Engr. Chuka Okoro, MNSE</h2>
          <p className="text-gray-700 font-medium">(Managing Partner &amp; CEO)</p>
          <p className="mt-2">
            Chuka Okoro is an Industrial and Production Engineering graduate from the University of Ibadan and holds a postgraduate degree in Electrical Engineering from the University of Lagos:contentReference[oaicite:8]{index=8}. He has over a decade of experience in power quality, facility design, control, and protection engineering. He started his career as a process engineering intern with Nigerite Nigeria Ltd, then moved to BSN Nigeria Ltd as a project coordinator, where he led numerous multi-million dollar projects. He later worked for Bank PHB Plc as a project lead before he was appointed Managing Partner of Transez Nigeria Ltd in 2005:contentReference[oaicite:9]{index=9}:contentReference[oaicite:10]{index=10}. He is a registered engineer (COREN) and a PMI-certified Project Management Professional. He has served as Branch Treasurer of the Nigerian Society of Engineers and is a member of the Nigerian Institute of Management, the National Institute of Electrical Engineers, and the Nigerian Institute of Mechanical Engineers:contentReference[oaicite:11]{index=11}. He has trained with IBFC Augusto on Risk Management, with Elspec (Israel) on Power Quality Management, and with DEHN + SÖHNE on Lightning Protection Systems:contentReference[oaicite:12]{index=12}. Chuka is happily married with three children:contentReference[oaicite:13]{index=13}.
          </p>
        </section>

        {/* Team Member 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Deji Glover, MNSE</h2>
          <p className="text-gray-700 font-medium">(Managing Partner &amp; Director)</p>
          <p className="mt-2">
            Deji Glover is an Electrical Engineering graduate from the University of Ibadan and a thoroughbred professional with over 15 years of experience spanning construction, oil &amp; gas, and fast-moving consumer goods industries in Africa and Europe:contentReference[oaicite:14]{index=14}. He has been a Field Analyst at Halliburton Energy Services, Senior Engineer at BSN Nigeria Ltd, and Principal Partner at Upgrade Technologies Ltd:contentReference[oaicite:15]{index=15}. With this experience, he helped revive Transez in 2005, shifting the company’s business direction towards total power quality:contentReference[oaicite:16]{index=16}. Deji is also a PMI-certified project manager and a Chartered Energy Auditor. He is happily married with children:contentReference[oaicite:17]{index=17}.
          </p>
        </section>

        {/* Team Member 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Olamide Modele</h2>
          <p className="text-gray-700 font-medium">(GM, Logistics &amp; Operations)</p>
          <p className="mt-2">
            Olamide Modele is an experienced shipping and logistics professional whose career spans several local and multinational organizations in the shipping, logistics, and product service industries:contentReference[oaicite:18]{index=18}. Over the past 10+ years he has gathered core competencies covering the full spectrum of shipping, logistics, customer relationship management, and business analysis. He consistently ensures excellent client service and insists on 100% customer satisfaction:contentReference[oaicite:19]{index=19}. Olamide’s background includes a decade of experience in logistics, construction, M&amp;E systems, earthing science, and power protection applications:contentReference[oaicite:20]{index=20}. He earned a B.Sc. in Philosophy from the University of Lagos and a Certificate in Accounting from Lagos City Polytechnic:contentReference[oaicite:21]{index=21}.
          </p>
        </section>

        {/* Team Member 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Augustine Edema</h2>
          <p className="text-gray-700 font-medium">(Head, Business Development)</p>
          <p className="mt-2">
            Augustine Edema holds a B.Sc. in Business Administration from the University of Lagos. He honed his business development skills starting at Computelink, Ikeja in 2001:contentReference[oaicite:22]{index=22}. He later joined Geo Okaekwu &amp; Sons in 2003 and rose to Account Manager for West African markets by 2004. He became Transez’s Head of Business Development in 2005:contentReference[oaicite:23]{index=23}. Augustine is a member of the National Institute of Marketing:contentReference[oaicite:24]{index=24}.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TeamPage;
