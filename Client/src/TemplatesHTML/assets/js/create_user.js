handleSubmitAddUser = async () => {
    try {
        // 1. Lấy giá trị trên form register
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        console.log(`username: ${username}`);
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);
        console.log(`role: ${role}`);

        // 2. Gửi giá trị từ client đến server
        const response = await axios.post('auth/admin/user/create', {
            username: username,
            email: email,
            password: password,
            role: role
        })

        if (response.status === 200) {

        }
    } catch (error) {
        // log error
    }
}