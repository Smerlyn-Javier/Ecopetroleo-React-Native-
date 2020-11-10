
import axios from 'axios';

import {BASE_URL_API} from "@env"
class StationsServices {
    async getStations() {
        try {
            const stations = await axios.get(`http://wadworkshop.net/ecopetroleo/api/estaciones/get_estaciones/`);
            return stations.data.posts;

        } catch (error) {
            console.log(error);
        }
    }

    async getStation(id) {
        try {
            const station = await axios.get(`${BASE_URL_API}/estaciones/get_estacion?post_id=${id}&post_type=estaciones&insecure=cool`);
            return station.data.post;
        } catch (error) {
            console.log(error);
        }
    }
}

export default StationsServices;