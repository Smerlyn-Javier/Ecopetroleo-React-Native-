
import axios from 'axios';

import { BASE_URL_API } from "@env"
class RegisterServices {
    async userRegister(username, email, displayname, password) {
        try {

            let method = 'register'
            let controller = 'user'

            const nonceResponse = await axios.get(`https://wadworkshop.net/ecopetroleo/api/get_nonce/?controller=${controller}&method=${method}&insecure=cool`);
            let nonce = nonceResponse.data.nonce


            const register = await axios.post(`https://wadworkshop.net/ecopetroleo/api/user/register/?username=${username}&email=${email}&display_name=${displayname}&user_pass=${password}&nonce=${nonce}&insecure=cool`);
            console.log(register)

            if (register.status == 200) {
                alert('Usuario Registrado.')
            }
            return register;

        } catch (error) {
            console.log(error);
            alert(error)
        }
    }
}

export default RegisterServices;