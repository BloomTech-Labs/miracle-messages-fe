import axios from 'axios';

export const axiosWithAuth = () => {
    
    let baseUrl;
    if(process.env.NODE_ENV === 'development') {
        baseUrl = `http://localhost:5000/`;
    }  else {
        baseUrl = `https://miracle-messages-dev.herokuapp.com/`;
    }

    return axios.create({
        baseURL: 'http://localhost:5000/',
        // headers: {
        //     authorization: token
        // }
    });
};
