"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CityWeather {
  name: string;
  lat?: number;
  lon?: number;
}

const cities: CityWeather[] = [
  { name: "Jaconé" },
  { name: "Maricá" },
  { name: "Saquarema" },
  { name: "Itacoatiara" },
  { name: "Barra da Tijuca" },
  { name: "Arpoador" },
  { name: "Recreio" },
];

const WaveForecast: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [wavesData, setWavesData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [waveLoading, setWaveLoading] = useState(false);

  const weatherApiKey = "28ea9db93cd6817322d1140076070cce";
  const waveApiKey =
    "cfc8c6e2-b11b-11ef-8770-0242ac130003-cfc8c7aa-b11b-11ef-8770-0242ac130003";

  useEffect(() => {
    const fetchWeatherForCities = async () => {
      try {
        setLoading(true);
        setError(null);

        const fetchPromises = cities.map(async (city) => {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=${weatherApiKey}`
          );
          const data = await response.json();

          if (!response.ok) {
            throw new Error(`Erro ao carregar ${city.name}: ${data.message}`);
          }

          return { city: city.name, ...data };
        });

        const weatherResults = await Promise.all(fetchPromises);
        setWeatherData(weatherResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherForCities();
  }, []);

  const fetchWaveData = async (lat: number, lon: number) => {
    try {
      setWaveLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=waveHeight`,
        {
          headers: {
            Authorization: waveApiKey,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Erro ao carregar dados das ondas: ${data.message}`);
      }

      setWavesData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setWaveLoading(false);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640, // Dispositivos muito pequenos
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Dispositivos médios
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440, // Dispositivos grandes
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  if (loading) return <div>Carregando previsões...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-blue-100 rounded-lg shadow-md w-full max-w-4xl mt-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Previsões no RJ</h2>
      <Slider {...sliderSettings} className="w-full">
        {weatherData.map((weather) => (
          <div
            key={weather.city}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-700">
              {weather.city}
            </h3>
            <p className="text-gray-700">Temperatura: {weather.main.temp}°C</p>
            <p className="text-gray-700">
              Condição: {weather.weather[0].description || "Indisponível"}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() =>
                fetchWaveData(weather.coord.lat, weather.coord.lon)
              }
              disabled={waveLoading}
            >
              {waveLoading ? "Carregando ondas..." : "Ver Ondas"}
            </button>
            {wavesData?.hours?.[0]?.waveHeight?.noaa !== undefined && (
              <p className="text-gray-700 mt-2">
                Altura das Ondas:{" "}
                {wavesData.hours[0].waveHeight.noaa.toFixed(1)} m
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WaveForecast;
