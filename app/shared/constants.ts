export const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/';
export const WEATHER_APIKEY = '3ea4804f1c4f469e463d0d2f7a8daa25';
export const CURRENT_WEATHER_PATH = 'weather';
export const WEATHER_FORECAST_PATH = 'forecast/daily';
export const GOOGLE_MAP_API_PATH = 'https://maps.googleapis.com/maps/api/timezone/json?location=';
export const GOOGLE_MAP_API_KEY = 'AIzaSyDfaaZTExAYCEXBf7LTIEy2TbSpSB0ckvA';
export const WEATHER_ICONS = {
  day: {
    'clear': 0xf00d,
    'clouds': 0xf002,
    'drizzle': 0xf009,
    'rain': 0xf008,
    'thunderstorm': 0x010,
    'snow': 0xf00a,
    'mist': 0xf0b6,
    'haze':0xf0b6
  },
  night: {
    'clear': 0xf02e,
    'clouds': 0xf086,
    'drizzle': 0xf029,
    'rain': 0xf028,
    'thunderstorm': 0xf02d,
    'snow': 0xf02a,
    'mist': 0xf04a,
    'haze':0xf0b6
  },
  neutral: {
    'temperature': 0xf055,
    'wind': 0xf050,
    'cloud': 0xf041,
    'pressure': 0xf079,
    'humidity': 0xf07a,
    'rain': 0xf019,
    'sunrise': 0xf046,
    'sunset': 0xf052
  }
};

export const WIND_DIRECTIONS = [
  "North", "North-northeast", "Northeast",
  "East-northeast", "East", "East-southeast", "Southeast",
  "South-southeast", "South", "South-southwest", "Southwest",
  "West-southwest", "West", "West-northwest", "Northwest", "North-northwest"
];
