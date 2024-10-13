const handleLogin = async () => {
    // 1. Lấy value trên Form register
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 2. Gửi value trên Form register lên Server
    const response = await axios.post('http://localhost:4000/api/login', {
        email: email,
        password: password
    })

    console.log(response)
    if (response.status == 200) {
        const accessToken = response.data.accessToken;

        // Decode để lấy thông tin Payload
        const payloadDecoded = jwt_decode(accessToken);

        if (payloadDecoded.role === 'regular') {
            window.location.href = 'home_page.html';
        } else {
            window.location.href = 'admin_page.html';
        }

        // Save accessToken to Client
        localStorage.setItem('access_token', accessToken);
    }
}