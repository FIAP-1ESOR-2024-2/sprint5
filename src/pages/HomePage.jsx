import { CloudRain } from "@phosphor-icons/react"
import ImageSlider from '../../src/components/Images/ImageSlider.jsx'


function HomePage() {

    let currentTemp = 32;
    let maxTemp = 35;
    let minTemp = 20;
    let rainChance = 74;
    let humidity = 96;
    let windStrength = 11;

    return (
        <>
            <div className="m-5 d-flex gap-3">
                <div className="p-5 bg-white rounded d-flex flex-column">
                    <div className="d-flex align-items-center temp-info">
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
                <div className="p-5 bg-white rounded">
                <ImageSlider />
                </div>
            </div>
        </>
    )
}

export default HomePage