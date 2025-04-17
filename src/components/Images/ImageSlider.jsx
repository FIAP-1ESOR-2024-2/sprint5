import { useState, useEffect, useRef } from 'react';
import './style.css'
import img1 from './img/seguro-rural-brasil-agronegocio-noticia.jpg/'
import img2 from './img/Expoagro.jpeg'
import img3 from './img/agro_widelg.png'

const images = [
  img1, //https://seguroruralbrasil.com.br/apesar-dos-desafios-agronegocio-deve-crescer-em-2025/noticias/?utm_source=chatgpt.com
  img2, //https://www.cnabrasil.org.br/noticias/expoagro-2025-e-lancada-oficialmente-e-conta-com-a-parceria-do-sistema-famato?utm_source=chatgpt.com
  img3, //https://www.bnews.com.br/noticias/bnews-agro/confira-oportunidades-e-desafios-tecnologicos-no-agronegocio-em-2025.html?utm_source=chatgpt.com
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="slider" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide ${i}`} />
        ))}
      </div>
      <button onClick={prevSlide} className="nav prev">◀</button>
      <button onClick={nextSlide} className="nav next">▶</button>
    </div>
  );
}
