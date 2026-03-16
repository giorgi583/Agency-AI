import React, {useEffect, useRef, useState} from 'react'
import { Toaster } from 'react-hot-toast';

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Work from './components/Work';
import TheTeam from './components/TheTeam';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const outlineRef = React.useRef(null);
  const dotRef = React.useRef(null);

  // refs for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handlemousemove = (e) => {
      mouse.current.x = e.clientX; 
      mouse.current.y = e.clientY;
    }
    document.addEventListener('mousemove', handlemousemove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) / 10;
      position.current.y += (mouse.current.y - position.current.y) / 10;
      if(dotRef.current && outlineRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y -20}px, 0)`;
      }
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      document.removeEventListener('mousemove', handlemousemove);
    }
  },[])
  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
<Services/>
      <Work/>
      <TheTeam/>
      <ContactUs/>
      <Footer theme={theme}/>

      {/* custom cursor ring  */}
      <div ref={outlineRef} style={{transition: 'transform 0.1s ease-out'}} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]'></div>
    {/* custom cursor dot */}
    <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'></div>
    </div>
  );
}

export default App;