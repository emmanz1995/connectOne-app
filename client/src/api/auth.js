import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

function onLogin(formData) {
    axios.post(`${REACT_APP_API_URL}/api/auth/login`, formData,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(response?.data?.token) {
            localStorage.setItem('jwt', JSON.stringify(response?.data))
        }
        return response;
    }).catch((error) => console.log(error));
}
function onLogout() {
    localStorage.clear()
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

export const Auth = {
    onLogin,
    onLogout,
    onRegister
}