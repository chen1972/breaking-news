// 用于文章类别的增删改查
var category = {
    show: function (callback) {
        $.get(baseUrl + '/admin/category_search', function (res) {
            callback(res)
        })
    },


}