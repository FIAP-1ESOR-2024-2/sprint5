import { useState, useEffect } from 'react';
import './style.css';
import img1 from './img/seguro-rural-brasil-agronegocio-noticia.jpg/';
import img2 from './img/Expoagro.jpeg';
import img3 from './img/agro_widelg.png';
import img4 from './img/cotacoes-agricolas.png';
import img5 from './img/reuniao_CNA.jpg';

const images = [
  {
    src: img1, 
    titulo: 'Apesar dos desafios, agronegócio deve crescer em 2025', 
    url: "https://seguroruralbrasil.com.br/apesar-dos-desafios-agronegocio-deve-crescer-em-2025/noticias/"
  }, 
  {
    src: img3, 
    titulo: 'Confira oportunidades e desafios tecnológicos no agronegócio em 2025' ,
     url: "https://www.bnews.com.br/noticias/bnews-agro/confira-oportunidades-e-desafios-tecnologicos-no-agronegocio-em-2025.html"
    }, 
  {
    src: img2, 
    titulo: 'Expoagro 2025 é lançada oficialmente e conta com a parceria do Sistema Famato',
     url: "https://www.cnabrasil.org.br/noticias/expoagro-2025-e-lancada-oficialmente-e-conta-com-a-parceria-do-sistema-famato"
    }, 
    {
      src: img4, 
      titulo: 'Cotações Agrícolas para esta Sexta-feira 11 de Abril 2025',
       url: "https://rrmais.com.br/noticia/agro/cotacoes-agricolas-para-esta-sexta-feira-11-de-abril-2025"
      }, 
    {
      src: img5, 
      titulo: 'Comissão Nacional de Infraestrutura e Logística da CNA debate iniciativas para superar gargalos do setor agropecuário',
       url: "https://cnabrasil.org.br/noticias/comissao-nacional-de-infraestrutura-e-logistica-da-cna-debate-iniciativas-para-superar-gargalos-do-setor-agropecuario"
      }, 
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "600px",
        overflow: "hidden",
        margin: "0 auto",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#fff",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: "transform 0.5s ease-in-out",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: "600px",
              flexShrink: 0,
              textAlign: "center",
              padding: "10px",
              boxSizing: "border-box",
            }}
          ><a href={img.url} target='_blank'>
            <img
              src={img.src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
            </a>
            <p
              style={{
                marginTop: "10px",
                fontSize: "16px",
                color: "#333",
                textDecoration: "underline",
              }}
            >
              {img.titulo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
