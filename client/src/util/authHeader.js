
export const AuthHeader = () => {
    const userInfo = JSON.parse(localStorage.getItem('jwt'))
    if(userInfo?.token) {
        return {
            Authorization: `Bearer ${userInfo?.token}`
        }
    } else {
        return {}
    }
}
