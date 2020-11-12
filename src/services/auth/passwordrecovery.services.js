
import axios from 'axios';

import { BASE_URL_API } from "@env"

class RecoveryServices {
    async recoveryPassword(username) {

        try {
            const recovery = await axios.post(`https://wadworkshop.net/ecopetroleo/api/user/retrieve_password/?user_login=${username}&insecure=cool`);
            return recovery.data.msg;

        } catch (error) {
            console.log(error);
            alert(error + " " + 'Intentalo Nuevamente')
        }
    }
}

export default RecoveryServices;