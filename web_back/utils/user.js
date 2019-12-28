

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
        $('.icon-tuichu').parent('a').on('click', function () {
            $.post(baseUrl + '/admin/logout', function (res) {
                alert(res.msg)
                if (res.code === 200) {
                    location.href = 'login.html'
                }
            })
        })
    },
    userinformation: function () {
        $.get(baseUrl + '/admin/getuser', function (res) {
            console.log(res);

            $('.user_info').children('img').attr('src', res.data.user_pic).siblings('span').html('欢迎&nbsp;&nbsp;' + res.data.nickname)
            $('.user_center_link').children('img').attr('src', res.data.user_pic)
        })
    }
}
