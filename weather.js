class Weather {
  constructor(city) {
    this.apiKey = '4da1314ee3c53b6cef0c5b0721adf8a1';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }
}