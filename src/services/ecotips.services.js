
import axios from 'axios';

import {BASE_URL_API} from "@env"
class EcoTipsServices {
    async getEcoTips() {
        try {

            const ecotips = await axios.get(`https://wadworkshop.net/ecopetroleo/api/core/get_recent_posts/`);
            return ecotips.data.posts;

        } catch (error) {
            console.log(error);
        }
    }
}

export default EcoTipsServices;