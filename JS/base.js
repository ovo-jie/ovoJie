/**
 * Created by FengChao on 2017/2/6.
 */
$(function () {
	var value;
    var html;
    $('.video').on('click',function () {
    	value=41;
       show('video-key',1,value);
    })
    $('.photo').on('click',function () {
        value=10;
        console.log('21324')
        show('photo-key',1,value);
    })
    $('.duanzi').on('click',function () {
        value=29;
        show('duanzi-key',1,value);
    })
    $('.voice').on('click',function () {
        value=31;
        show('voice-key',1,value)
    })






    function show(key,page,num) {
        $.ajax({
            type: 'post',
            url: "http://route.showapi.com/255-1",
            dataType: 'jsonp',
            data: {
                "type":num,
                "page":page,
                "showapi_appid": '31652', //这里需要改成自己的appid
                "showapi_sign": '6aa2fd95a4a54daa860f9471eccb3f76'  //这里需要改成自己的应用的密钥secret，

            },
            jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
            error: function(XmlHttpRequest, textStatus, errorThrown) {
                alert("操作失败!");
            },
            success: function(result) {
                var ul =document.createElement('ul');
                var contenlist=result.showapi_res_body.pagebean;
                console.log(contenlist)
                html=template(key,contenlist);
                $('#content-list-ul').html(html);
            }
        });
    }
})
