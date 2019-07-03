
$(function () {

  https: //www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123654

    $('.click').on('tap', function () {
        $.ajax({
            url: 'http://api.okayapi.com',
            data: {
                key: '00d91e8e0cca2b76f515926a36db68f5',
                phone: $('#phone').val(),
                passwd: $('#passward').val()
            },
            success: function (data) {
                console.log(data);
                if (data.ret === 200) {
                    window.location.href = './index.html'
                } else if (data.ret === 202) {
                    alert(data.msg);
                }
            }
        })
    })



})
