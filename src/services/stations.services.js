
import axios from 'axios';

import {BASE_URL_API} from "@env"
class StationsServices {
    async getStations() {
        try {
            const stations = await axios.get(`${BASE_URL_API}/estaciones/get_estaciones/`);
            return stations.data.posts;

        } catch (error) {
            console.log(error);
        }
    }
}

export default StationsServices;