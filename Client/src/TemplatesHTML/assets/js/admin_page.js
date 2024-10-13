

getListUser = async () => {
    try {
        const configHeader = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        // Call API get list users
        const response = await axios.get('http://localhost:4000/auth/admin/user', configHeader);
    } catch (error) {

    }

}

getListUser();