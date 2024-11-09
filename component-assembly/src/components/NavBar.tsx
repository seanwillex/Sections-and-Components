import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiLogIn, FiUserPlus } from 'react-icons/fi';

interface WeatherData {
  temp: number;
  description: string;
}

const NavBar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [time, setTime] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    // Update document class for dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    }, 1000);

    // Fetch weather data
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Abuja&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );
        const data = await res.json();
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description
        });
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
    // Fetch weather every 30 minutes
    const weatherTimer = setInterval(fetchWeather, 1800000);

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
              Logo
            </span>
          </div>

          {/* Center items */}
          <div className="flex items-center space-x-8">
            <div className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>
              {time}
            </div>
            {weather && (
              <div className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                Abuja: {weather.temp}°C, {weather.description}
              </div>
            )}
          </div>

          {/* Right items */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                isDark ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-black'
              }`}
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button className={`flex items-center space-x-1 text-sm ${
              isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
            }`}>
              <FiLogIn size={20} />
              <span>Login</span>
            </button>
            <button className={`flex items-center space-x-1 text-sm ${
              isDark ? 'bg-white text-black' : 'bg-black text-white'
            } px-4 py-2 rounded-lg hover:opacity-90`}>
              <FiUserPlus size={20} />
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 