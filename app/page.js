import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Countries from "./components/Countries";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SuccessStories from './components/SuccessStories';
import Blogs from './components/Blogs';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Countries />
      <WhyUs />
      <Testimonials />
      <SuccessStories />
      <Blogs />
      {/* <Contact /> */}
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
