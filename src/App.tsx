import { useEffect } from "react";
import Index from "./sections/Index"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 800,     
      once: true,    
      offset: 100,     
      easing: 'ease-out-cubic',
    });
  }, []);
  return <Index />;
}

export default App
