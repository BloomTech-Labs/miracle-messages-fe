import axios from "axios";

export default function () {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            'Content-Type': 'application/jason',
            Authorization: `Bearer ${token}`
        }
    })
}