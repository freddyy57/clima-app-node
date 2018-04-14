const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

/* jshint ignore:start */
let getInfo = async(direccion) => {

        try {

            let coords = await lugar.getLugarLatLng(direccion);
            let reporte = await clima.getClima(coords.lat, coords.lng);

            return `El clima en ${ coords.direccion } es de ${ JSON.stringify(reporte, undefined, 2) }`;

        } catch (e) {

            return `No se pudo determinar el clima en ${direccion}`;

        }


    }
    /* jshint ignore:end */

getInfo(argv.direccion)
    .then(clima => console.log(clima))
    .catch(e => console.log(e));


// lugar.getLugarLatLng(argv.direccion)
//     .then(res => {
//         console.log(res);
//         // clima.getClima(res.lat, res.lng)
//         //     .then(temp => console.log(JSON.stringify(temp, undefined, 2)))
//         //     .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));

// clima.getClima(37.20199, -1.89286)
//     .then(temp => console.log(JSON.stringify(temp, undefined, 2)))
//     .catch(e => console.log(e));