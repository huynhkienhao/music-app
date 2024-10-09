handlerRegister = async () => {
    try {
        // 1. Lấy value trên Form register
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(`username: ${username}`);
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);


        // 2. Gửi value trên Form register lên Server
        const response = await axios.post('http://localhost:4000/api/register', {
            username: username,
            email: email,
            password: password
        })
        if (response.status == 200) {
            window.location.href = '../Login/login.html';
        }
    } catch (error) {
        console.log(error);
    }

}