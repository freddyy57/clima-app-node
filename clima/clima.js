const axios = require('axios');

/* jshint ignore:start */
const getClima = async(lat, lng) => {
        let api_key = '32ea5f1fb719bc7c15d33219180f0e29';
        let lang = 'es'
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}&lang=${lang}`);

        if (res.data.status === '400') {
            throw new Error(`No hay resultados para estas coordenadas`);
        }

        // return res.data.weather[0].description;
        //return res.data.main.temp_min;
        //return res.data.main.temp_max;
        //return res.data.main.humidity;
        //return res.data.visibility;
        //return res.data.wind.speed;
        // return res.data.wind.deg;
        // return res.data.cod;
        // return res.data.weather[0].main;

        return {
            Principal: res.data.weather[0].main,
            descripcion: res.data.weather[0].description,
            humedad: `${res.data.main.humidity}%`,
            temperatura_max: `${res.data.main.temp_max }ºC`,
            temperatura_min: `${res.data.main.temp_min }ºC`,
            viento_velocidad: `${res.data.wind.speed }km`,
            viento_rumbo: `${res.data.wind.deg}º`,
            visibilidad: `${res.data.visibility}m`
        }
    }
    /* jshint ignore:end */

module.exports = {
    getClima
}