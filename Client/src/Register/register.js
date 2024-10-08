handlerRegister = () => {
    // 1. Lấy value trên Form register
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`username: ${username}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);


    // 2. Gửi value trên Form register lên Server
    axios.post('http://localhost:4000/api/auth/register', {
        username: username,
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}