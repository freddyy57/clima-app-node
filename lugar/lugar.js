const axios = require('axios');

/* jshint ignore:start */

const getLugarLatLng = async(direccion) => {

        let encodedUrl = encodeURI(direccion);
        let google_api = '';

        let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=${google_api}`);

        if (res.data.status === 'ZERO_RESULTS') {
            throw new Error(`No hay resultados para la ciudad ${ direccion }`);
        }

        let location = res.data.results[0].formatted_address;
        let coords = res.data.results[0].geometry.location;

        // console.log(JSON.stringify(location, undefined, 2));
        // console.log('lat: ', coords.lat);
        // console.log('lng: ', coords.lng);
        // console.log(res.status);


        return {
            direccion: location,
            lat: coords.lat,
            lng: coords.lng
        }
    }
    /* jshint ignore:end */

module.exports = {
    getLugarLatLng
};