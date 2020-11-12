
import axios from 'axios';

import { BASE_URL_API } from "@env"

class LoginServices {
    async userLogin(username, password) {

        try {
            let method = 'generate_auth_cookie'
            let controller = 'user'

            const nonceResponse = await axios.get(`https://wadworkshop.net/ecopetroleo/api/get_nonce/?controller=${controller}&method=${method}&insecure=cool`);
            let nonce = nonceResponse.data.nonce


            const login = await axios.post(`https://wadworkshop.net/ecopetroleo/api/user/generate_auth_cookie/?username=${username}&password=${password}&insecure=cool&nonce=${nonce}&insecure=cool`);

            return login.data.status;

        } catch (error) {
            console.log(error);
            alert(error + " " + 'Intentalo Nuevamente')
        }
    }
}

export default LoginServices;