const handleLogin = async () => {
    // 1. Lấy value trên Form register
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 2. Gửi value trên Form register lên Server
    const response = await axios.post('http://localhost:4000/api/login', {
        email: email,
        password: password
    })
    if (response.status == 200) {

    }
}