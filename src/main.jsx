import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    // Scroll bo'lganda animatsiyalarni yangilash
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
