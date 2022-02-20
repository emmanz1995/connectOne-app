
export const AuthHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem('jwt'))

    if(currentUser?.token) {
        return { Authorization: `Bearer ${currentUser?.token}` }
    } else {}
}
