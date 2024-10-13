// Call API get list users
axios.get('http://localhost:4000/auth/admin/user', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
})