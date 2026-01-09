export type WeatherData = {
  name: string;
  main: { temp: number };
  weather: { icon: string; description: string }[];
};

export type WeatherIcon = "01d" | "02d" | "03d" | "09d" | "10d" | "13d";

export type WeatherResponse = {
  success: boolean;
  data?: WeatherData;
  error?: string;
};