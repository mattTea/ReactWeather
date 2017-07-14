var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=568f0a596d0e8c3a8be6b05120110edf&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // query string

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) { // the ugly bit referred to in notes
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error(err.response.data.message);
    });
  }
}
