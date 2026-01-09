import { useState, useEffect } from 'react';
import type { WeatherData } from '@/types/Weather/Weather';
import mockWeatherDataData from '@/mock/Weather/WeatherData';

const useWeather = (city: string = 'Paris') => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    if(env.APP_MOCK_DATA === 'true') {
      setWeather(mockWeatherDataData);
      setLoading(false);
      return;
    }

    const cachedWeather = localStorage.getItem('weatherData');
    if (cachedWeather) {
      console.log("Using cached weather data");
      console.log(JSON.parse(cachedWeather));
      setWeather(JSON.parse(cachedWeather));
      setLoading(false);
      return;
    }

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&units=metric&lang=fr&appid={secret}`
        );
        const data: WeatherData = await response.json();
        localStorage.setItem('weatherData', JSON.stringify(data));
        setWeather(data);
      } catch (error) {
        console.error("Erreur lors de la récupération de la météo :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

        console.log(weather, loading);
  return { weather, loading };
};

export default useWeather;