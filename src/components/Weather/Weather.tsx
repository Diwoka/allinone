import useWeather from '@/hooks/Weather/useWeather';

const Weather = () => {
  const { weather, loading } = useWeather();

  if (loading) return <div>Chargement...</div>;
  if (!weather) return <div>Impossible de charger la météo.</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Météo à {weather.name}</h2>

      <div className="flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16"
        />
        <div className="ml-4">
          <p className="text-2xl">{Math.round(weather.main.temp)}°C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
