import { request } from '../config/http-request';
import { REGISTER_URL } from "../config/constants";

export const register = (data) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            body: JSON.stringify(data),
            url: `${REGISTER_URL}`,
        })
            .then(resolve)
            .catch(reject)
    });
}