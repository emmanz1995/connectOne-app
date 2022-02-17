import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

function onLogin(formData) {
    return axios.post(`${REACT_APP_API_URL}/api/auth/login`, formData,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(response.data.token) {
            localStorage.setItem('jwt', JSON.stringify(response?.data))
        }
        return response;
    }).catch((error) => {
        // console.log(error)
        return error?.response?.data?.msg;
    });
}
function onLogout() {
    localStorage.removeItem('jwt');
}
function onRegister(formData) {
    axios.post(`${REACT_APP_API_URL}/auth/login`, formData,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response;
    }).catch((error) => console.log(error));
}

function getUser() {
    const token = JSON.parse(localStorage.getItem('jwt'))
    return axios.get(`${REACT_APP_API_URL}/api/auth/me`, {
        headers: {
            Authorization: `Bearer ${token?.token}`
        }
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return error?.response?.data?.msg;
    })
}

export const Auth = {
    onLogin,
    onLogout,
    onRegister,
    getUser
}
