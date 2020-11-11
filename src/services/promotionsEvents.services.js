
import axios from 'axios';

import {BASE_URL_API} from "@env"
class PromotionsEventsServices {
    async getPromotionsEvents() {
        try {
            const promotionsEvents = await axios.get(`http://wadworkshop.net/ecopetroleo/api/promocioneseventos/get_promociones_eventos/`);
            return promotionsEvents.data.posts;

        } catch (error) {
            console.log(error);
        }
    }

    async getPromotionEvent(id) {
        try {
            const promotionEvent = await axios.get(`https://wadworkshop.net/ecopetroleo/api/estaciones/get_estacion/?post_id=${id}&post_type=promociones_y_evento&insecure=cool`);
            return promotionEvent.data.post;
        } catch (error) {
            console.log(error);
        }
    }
}

export default PromotionsEventsServices;