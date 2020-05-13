import axios from 'axios';

export const axiosWithAuth = () => {
    
    let baseUrl;
    if(process.env.NODE_ENV === 'development') {
        baseUrl = 'https://miracle-messages-dev.herokuapp.com/';
    }  else {
        baseUrl = `https://miracle-messages-dev.herokuapp.com/`;
    }

    return axios.create({
        baseURL: baseUrl,
        // headers: {
        //     authorization: token
        // }
    });
};
