"use client";
import React, { useEffect, useState } from 'react';

interface WaveForecastProps {
  location: string; // Nome da localização
}

const WaveForecast: React.FC<WaveForecastProps> = ({ location }) => {
  const [weather, setWeather] = useState<any>(null);
  const [waves, setWaves] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const weatherApiKey = '28ea9db93cd6817322d1140076070cce';
  const waveApiKey =
    'cfc8c6e2-b11b-11ef-8770-0242ac130003-cfc8c7aa-b11b-11ef-8770-0242ac130003';

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true);
        setError(null); // Resetando o erro a cada nova requisição

        // Obter previsão do tempo
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherApiKey}`
        );
        const weatherData = await weatherResponse.json();

        if (!weatherResponse.ok) {
          throw new Error(`Erro ao obter o clima: ${weatherData.message}`);
        }

        // Obter previsão de ondas
        const waveResponse = await fetch(
          `https://api.stormglass.io/v2/weather/point?lat=${weatherData.coord.lat}&lng=${weatherData.coord.lon}&params=waveHeight`,
          {
            headers: {
              Authorization: waveApiKey,
            },
          }
        );
        const waveData = await waveResponse.json();

        if (!waveResponse.ok) {
          // Logando o erro detalhado no console
          console.error("Erro ao obter os dados das ondas:", waveData);
          throw new Error(`Erro ao obter os dados das ondas: ${waveData.errors?.[0]?.message || 'Erro desconhecido'}`);
        }

        // Definindo os dados no estado
        setWeather(weatherData);
        setWaves(waveData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [location]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-blue-100 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-blue-600">Previsão para {location}</h2>
      <div className="mt-4">
        {/* Previsão do Tempo */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Clima Atual</h3>
          <p className="text-gray-700">Temperatura: {weather?.main?.temp}°C</p>
          <p className="text-gray-700">
            Condição: {weather?.weather?.[0]?.description || 'Indisponível'}
          </p>
        </div>

        {/* Previsão das Ondas */}
        <div>
          <h3 className="text-lg font-semibold">Ondas</h3>
          {waves?.hours?.[0]?.waveHeight?.noaa !== undefined ? (
            <p className="text-gray-700">
              Altura das Ondas: {waves.hours[0].waveHeight.noaa.toFixed(1)} m
            </p>
          ) : (
            <p className="text-gray-700">Dados de ondas indisponíveis no momento.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaveForecast;
