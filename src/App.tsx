import { useEffect } from "react";
import Sidebar from "./components/Sidebar"
import Index from "./sections/Index"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 800,     // animation duration in ms
      once: true,        // animate only the first time it scrolls into view
      offset: 100,       // px from the trigger point
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <>
    {/* <Sidebar /> */}
    <Index />
    </>
  
  )
}

export default App
