import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      {/* <div style={{ height: '200vh', background: '#f8f9ff' }}>
        <div style={{ paddingTop: '120px', textAlign: 'center' }}>
          <h1 style={{ color: '#2100B1', fontSize: '48px', fontWeight: 'bold' }}>
            EdX Consultants
          </h1>
          <p style={{ color: '#ED4B00', marginTop: '10px' }}>
            Shaping Careers, Transforming Lives
          </p>
        </div>
      </div> */}
    </main>
  );
}