import axios from 'axios';
import {API_PATHS} from "../../utils/API_PATHS";


export const sendBasicRequest = async (data: any) => {
    try {
        const response = await axios({
            method: 'POST',
            url: API_PATHS.predict + '/basic',
            data: data,
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const sendDetailedRequest = async (data: any) => {
    try {
        const response = await axios({
            method: 'POST',
            url: API_PATHS.predict + '/detailed',
            data: data,
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}