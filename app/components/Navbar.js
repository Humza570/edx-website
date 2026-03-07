// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Phone,
//   Mail,
//   Instagram,
//   Facebook,
//   Youtube,
//   Linkedin,
//   Twitter,
// } from "lucide-react";
// import Image from "next/image";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Countries", href: "#countries" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">
//       {/* ===== TOP INFO BAR ===== */}
//       <div
//         style={{
//           background: "#2100B1",
//           overflow: "hidden",
//           height: scrolled ? "0px" : "40px",
//           opacity: scrolled ? 0 : 1,
//           transition: "all 0.3s ease",
//         }}
//         className="hidden md:block"
//       >
//         <div
//           style={{
//             maxWidth: "1280px",
//             margin: "0 auto",
//             padding: "0 32px",
//             height: "40px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Left: Contact Info */}
//           <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
//             <a
//               href="tel:+923000000000"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "7px",
//                 color: "rgba(255,255,255,0.80)",
//                 fontSize: "12px",
//                 textDecoration: "none",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.color = "rgba(255,255,255,0.80)")
//               }
//             >
//               <Phone size={11} strokeWidth={2} />
//               <span>+92 300 0000000</span>
//             </a>

//             <a
//               href="mailto:info@edxconsultants.com"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "7px",
//                 color: "rgba(255,255,255,0.80)",
//                 fontSize: "12px",
//                 textDecoration: "none",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.color = "rgba(255,255,255,0.80)")
//               }
//             >
//               <Mail size={11} strokeWidth={2} />
//               <span>info@edxconsultants.com</span>
//             </a>

//             <a
//               href="mailto:admissions@edxconsultants.com"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "7px",
//                 color: "rgba(255,255,255,0.80)",
//                 fontSize: "12px",
//                 textDecoration: "none",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.color = "rgba(255,255,255,0.80)")
//               }
//             >
//               <Mail size={11} strokeWidth={2} />
//               <span>admissions@edxconsultants.com</span>
//             </a>
//           </div>

//           {/* Right: Social Icons */}
//           <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
//             {[Instagram, Facebook, Youtube, Linkedin, Twitter].map(
//               (Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   style={{
//                     color: "rgba(255,255,255,0.70)",
//                     display: "flex",
//                     alignItems: "center",
//                     textDecoration: "none",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.color = "rgba(255,255,255,0.70)")
//                   }
//                 >
//                   <Icon size={13} strokeWidth={1.8} />
//                 </a>
//               ),
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ===== MAIN NAV ===== */}
//       <div
//         style={{
//           background: "white",
//           borderBottom: "1px solid #ebebeb",
//           boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.07)" : "none",
//           transition: "box-shadow 0.3s",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1280px",
//             margin: "0 auto",
//             padding: "0 32px",
//             height: "90px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: "32px",
//           }}
//         >
//           {/* Logo */}
//           <a
//             href="#home"
//             style={{
//               flexShrink: 0,
//               display: "flex",
//               alignItems: "center",
//               textDecoration: "none",
//             }}
//           >
//             <Image
//               src="/Edx_Logo.png"
//               alt="EdX Consultants"
//               width={220} // ← 200 سے 220
//               height={110} // ← 100 سے 110
//               style={{ width: "auto", height: "110px", objectFit: "contain" }}
//               priority
//             />
//           </a>

//           {/* Desktop Nav Links */}
//           <nav
//             className="hidden md:flex"
//             style={{
//               flex: 1,
//               justifyContent: "center",
//               alignItems: "center",
//               gap: "4px",
//             }}
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 style={{
//                   padding: "8px 22px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: "#2d2d2d",
//                   textDecoration: "none",
//                   borderRadius: "6px",
//                   letterSpacing: "0.01em",
//                   transition: "all 0.2s",
//                   whiteSpace: "nowrap",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.color = "#2100B1";
//                   e.currentTarget.style.background = "rgba(33,0,177,0.05)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.color = "#2d2d2d";
//                   e.currentTarget.style.background = "transparent";
//                 }}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <a
//             href="#contact"
//             className="hidden md:flex"
//             style={{
//               alignItems: "center",
//               gap: "8px",
//               background: "#ED4B00",
//               color: "white",
//               padding: "12px 26px",
//               borderRadius: "6px",
//               fontSize: "13px",
//               fontWeight: "700",
//               textDecoration: "none",
//               flexShrink: 0,
//               letterSpacing: "0.04em",
//               textTransform: "uppercase",
//               transition: "all 0.2s",
//               boxShadow: "0 3px 12px rgba(237,75,0,0.28)",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "#cc3f00";
//               e.currentTarget.style.transform = "translateY(-1px)";
//               e.currentTarget.style.boxShadow = "0 6px 20px rgba(237,75,0,0.4)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "#ED4B00";
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow =
//                 "0 3px 12px rgba(237,75,0,0.28)";
//             }}
//           >
//             <Phone size={13} />
//             Free Consultation
//           </a>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden"
//             style={{
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               color: "#2100B1",
//               padding: "8px",
//             }}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* ===== MOBILE MENU ===== */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.2 }}
//             style={{
//               background: "white",
//               borderTop: "3px solid #2100B1",
//               boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
//             }}
//           >
//             <div
//               style={{
//                 padding: "16px 24px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "4px",
//               }}
//             >
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   style={{
//                     padding: "12px 16px",
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: "#2d2d2d",
//                     textDecoration: "none",
//                     borderRadius: "6px",
//                     transition: "all 0.2s",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "rgba(33,0,177,0.06)";
//                     e.currentTarget.style.color = "#2100B1";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "transparent";
//                     e.currentTarget.style.color = "#2d2d2d";
//                   }}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <a
//                 href="#contact"
//                 onClick={() => setIsOpen(false)}
//                 style={{
//                   marginTop: "12px",
//                   padding: "13px 24px",
//                   background: "#ED4B00",
//                   color: "white",
//                   borderRadius: "6px",
//                   textAlign: "center",
//                   fontWeight: "700",
//                   fontSize: "13px",
//                   letterSpacing: "0.04em",
//                   textTransform: "uppercase",
//                   textDecoration: "none",
//                   display: "block",
//                 }}
//               >
//                 Free Consultation
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Countries', href: '/countries' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>

      {/* ===== TOP INFO BAR ===== */}
      <div
        style={{
          background: '#2100B1',
          height: scrolled ? '0px' : '40px',
          opacity: scrolled ? 0 : 1,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: Contact Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
<a
              href="tel:+923000000000"
              style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'rgba(255,255,255,0.80)', fontSize: '12px', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}
            >
              <Phone size={11} strokeWidth={2} />
              <span>+92 300 0000000</span>
            </a>

            <a
              href="mailto:info@edxconsultants.com"
              style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'rgba(255,255,255,0.80)', fontSize: '12px', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}
            >
              <Mail size={11} strokeWidth={2} />
              <span>info@edxconsultants.com</span>
            </a>

            <a
              href="mailto:admissions@edxconsultants.com"
              style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'rgba(255,255,255,0.80)', fontSize: '12px', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}
            >
              <Mail size={11} strokeWidth={2} />
              <span>admissions@edxconsultants.com</span>
            </a>
          </div>

          {/* Right: Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {[Instagram, Facebook, Youtube, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{ color: 'rgba(255,255,255,0.70)', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.70)'}
              >
                <Icon size={13} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div
        style={{
          background: 'white',
          borderBottom: '1px solid #e8e8e8',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            height: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >

          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/Edx_Logo.png"
              alt="EdX Consultants"
              width={220}
              height={110}
              style={{ height: '88px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
              gap: '4px',
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('/#')[0]));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: '10px 22px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: isActive ? '#2100B1' : '#333',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    background: isActive ? 'rgba(33,0,177,0.07)' : 'transparent',
                    borderBottom: isActive ? '2px solid #2100B1' : '2px solid transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#2100B1';
                      e.currentTarget.style.background = 'rgba(33,0,177,0.05)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#333';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <a
            href="/#contact"
            className="hidden md:flex"
            style={{
              alignItems: 'center',
              gap: '8px',
              background: '#ED4B00',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '700',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'all 0.2s',
              boxShadow: '0 4px 15px rgba(237,75,0,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#cc3f00';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(237,75,0,0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#ED4B00';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(237,75,0,0.3)';
            }}
          >
            <Phone size={15} />
            Free Consultation
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2100B1', padding: '8px' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'white',
              borderTop: '3px solid #2100B1',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            }}
          >
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('/#')[0]));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: isActive ? '#2100B1' : '#333',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      background: isActive ? 'rgba(33,0,177,0.07)' : 'transparent',
                      transition: 'all 0.2s',
                      borderLeft: isActive ? '3px solid #2100B1' : '3px solid transparent',
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                style={{
                  marginTop: '12px', padding: '14px 24px',
                  background: '#ED4B00', color: 'white',
                  borderRadius: '8px', textAlign: 'center',
                  fontWeight: '700', fontSize: '14px',
                  textDecoration: 'none', display: 'block',
                }}
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}