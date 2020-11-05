
import axios from 'axios';

import {BASE_URL_API} from "@env"
class FuelsServices {
    async getFuels() {
        try {
            debugger
            const fuels = await axios.get(`${BASE_URL_API}/combustibles/get_combustibles/`);
            debugger
            return fuels.data.posts;

        } catch (error) {
            console.log(error);
        }
    }
}

export default FuelsServices;