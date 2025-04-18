import { CloudRain } from "@phosphor-icons/react";
import ImageSlider from "../../src/components/Images/ImageSlider.jsx";
import Dropdown from '../components/Dropdown/Dropdown.jsx';
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const { informacao } = location.state || {};
  const currentTemp = 32;
  const maxTemp = 35;
  const minTemp = 20;
  const rainChance = 74;
  const humidity = 96;
  const windStrength = 11;

  let paramNome = informacao !== undefined ? informacao.nome : "Sem Nome";
  let paramEmail = informacao !== undefined ? informacao.email : "Sem Email";

  return (
    <>
    <div className="row">
        <div className="col-12">
           <Dropdown nomeUsuario={paramNome} emailUsuario={paramEmail}></Dropdown>
        </div>
        </div>
      <div className="m-5 d-flex gap-3">        
        <div className="p-5 bg-success-subtle rounded d-flex flex-column">
          <div className="bg-dark-subtle rounded-4 border border-black">
            <div className="d-flex align-items-center temp-info px-4">
              <div className="me-3 d-flex flex-column">
                <CloudRain className="me-2 main-logo" />
                <small>{currentTemp} °C</small>
              </div>
              <span>Chuva moderada em sua região</span>
            </div>
            <div className="my-4 d-flex flex-column">
              <div className="d-flex flex-row justify-content-around">
                <div className="my-1">
                  <small>Máx.</small>
                  <div className="p-2 max-temp rounded">
                    <span>{maxTemp} °C</span>
                  </div>
                </div>
                <div className="my-1">
                  <small>Min.</small>
                  <div className="p-2 min-temp rounded">
                    <span>{minTemp} °C</span>
                  </div>
                </div>
              </div>
              <div className="temp-info d-flex justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <small>Precipitação: {rainChance}%</small>
                  </li>
                  <li>
                    <small>Humidade: {humidity}%</small>
                  </li>
                  <li>
                    <small>Vento: {windStrength} km/h</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 bg-success-subtle rounded">
          <h4>Veja as principais notícias do mundo Agrônomo</h4>
          <ImageSlider />
        </div>
      </div>
    </>
  );
}

export default HomePage;
