

var user = {
    login: function (uname, pass) {
        $.ajax({
            type: 'POST',
            url: baseUrl + '/admin/login',
            data: { user_name: uname, password: pass },
            success: function (res) {
                alert(res.msg)
                if (res.code == 200) {
                    location.href = 'index.html'
                }

            }
        })

    },
    logout: function () {
      
        $.post(baseUrl + '/admin/logout', function (res) {
            alert(res.msg)
            if (res.code === 200) {
                location.href = 'login.html'
            }
        })
    },
    userinformation: function (callback) {
        $.get(baseUrl + '/admin/getuser', function (res) {
            // console.log(res);
            callback(res)
           
        })
    }
}
