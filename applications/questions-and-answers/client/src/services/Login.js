import { request } from '../config/http-request';
import { TOKEN_URL } from "../config/constants";

export const login = (data) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            body: JSON.stringify(data),
            url: `${TOKEN_URL}`,
        })
            .then(resolve)
            .catch(reject)
    });

}