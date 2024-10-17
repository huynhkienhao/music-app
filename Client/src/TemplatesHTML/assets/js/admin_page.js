

getListUser = async () => {
    try {
        // Call API get list users
        const response = await axios.get('auth/admin/user');
        showListUser(response);

        // Show username login
        // Decode để lấy thông tin Payload
        const accessToken = localStorage.getItem('access_token');
        const payloadDecoded = jwt_decode(accessToken);
        document.querySelector('.username').innerText = payloadDecoded.username;
    } catch (error) {
        if (error.response.status === 401) {
            window.location.href = 'login.html';
        }
    }

}

showListUser = (response) => {
    let htmlUser = `<table class="table table-hover text-nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>`;
    response.data.forEach((user, index) => {
        htmlUser += `<tr>
                        <td>${index + 1}</td>
                        <td>${user.username}</td>
                        <td>${user.role}</td>
                        <td>${user.email}</td>
                        <td>
                            <button id="${user._id}" type="button" class="btn btn-danger" onclick="handleDeleteUser(this.id)">Delete</button>
                        </td>
                    </tr>`;
    });
    htmlUser += `   </tbody>
                </table>`;
    document.querySelector('.list_user').innerHTML = htmlUser;
}

handleDeleteUser = async (userId) => {
    try {
        const response = await axios.delete(`auth/admin/user/delete/${userId}`);
        if (response.status === 200) {
            window.location.reload();
        }
    } catch (error) {
        if (error.response.status === 401) {
            window.location.href = 'login.html';
        }
    }
}
handleAddUser = () => {
    window.location.href = 'create_user.html';
}

handleLogoutUser = () => {
    localStorage.removeItem('access_token');
    window.location.href = 'login.html';
}

getListUser();