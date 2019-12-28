

var user = {
    login: function (uname, pass, callback) {
        $.ajax({
            type: 'POST',
            url: baseUrl + '/admin/login',
            data: { user_name: uname, password: pass },
            success: function (res) {
                callback(res)

            }
        })

    },
    logout: function (callback) {

        $.post(baseUrl + '/admin/logout', function (res) {
            callback(res)
        })
    },
    userinformation: function (callback) {
        $.get(baseUrl + '/admin/getuser', function (res) {
            // console.log(res);
            callback(res)

        })
    }
}
