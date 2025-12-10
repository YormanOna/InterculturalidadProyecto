import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Muestra el botón cuando el scroll supera un cierto umbral
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Ajusta este valor según necesites
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Desplaza la página hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
