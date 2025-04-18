import { CloudRain } from "@phosphor-icons/react";
import ImageSlider from "../../src/components/Images/ImageSlider.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import { useLocation } from "react-router-dom";
import { FaCarrot } from "react-icons/fa";

function HomePage() {
  const location = useLocation();
  const { informacao } = location.state || {};
  const currentTemp = 25;
  const maxTemp = 27;
  const minTemp = 18;
  const rainChance = 40;
  const humidity = 62;
  const windStrength = 3;

  let paramNome = informacao !== undefined ? informacao.nome : "Sem Nome";
  let paramEmail = informacao !== undefined ? informacao.email : "Sem Email";

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Dropdown
            nomeUsuario={paramNome}
            emailUsuario={paramEmail}
          ></Dropdown>
        </div>
      </div>
      <div className="m-5 d-flex gap-3 shadow-lg">
        <div className="p-5 bg-success-subtle rounded d-flex flex-column ">
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
          <div className="bg-dark-subtle rounded-4 border border-black mt-3">
            <div className="row">
              <div className="col-12 text-center">
                <a className="text-decoration-underline"
                  href="https://casavogue.globo.com/Arquitetura/Paisagismo/noticia/2021/04/horta-em-casa-saiba-melhores-especies-para-plantar-no-outono.html"
                  target="_blank"
                >
                  <FaCarrot />
                  <span className="text-lg"> Hortaliças para o Outono</span>
                </a>
              </div>
              <div className="col-12">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">acelga</li>
                  <li className="list-group-item">rúcula</li>
                  <li className="list-group-item">alface de inverno</li>
                  <li className="list-group-item">beterraba</li>
                  <li className="list-group-item">brócolis</li>
                  <li className="list-group-item">ervilha</li>
                  <li className="list-group-item">espinafre</li>
                  <li className="list-group-item">couve-manteiga</li>
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
