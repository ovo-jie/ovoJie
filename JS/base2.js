/**
 * Created by FengChao on 2017/2/7.
 */
$(function () {
    var page=document.querySelectorAll('.content-footer-page');
    console.log(page[0].text)
    var value;
    var a;
        /*var page = pag?pag:1;*/
        // console.log(page);
        $('.video').on('click',function () {
            value=41;
            show(1,value);
            a=value;
        })
        $('.photo').on('click',function () {
            value=10;
            show(1,value);
            a=value;
        })
        $('.voice').on('click',function () {
            value=31;
            show(1,value);
            a=value;
        })
        $('.duanzi').on('click',function () {
            value=29;
            show(1,value);
            a=value;
        })
        $('.all').on('click',function () {
            show(1);
            a=value;
        })

        show(1);
    $('.content-footer-page').on('click',function () {
        var text=$(this).text();
        show(text,a)
        for (var i=0;i<page.length;i++){
            page[i].style.backgroundColor='white';
            page[i].style.color='black';
        }
        $(this).css({'backgroundColor':'rgb(229,5,65)'});
        $(this).css({'color':'white'})
    })





function show(page,num) {
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
            console.log(result)
            var contenlist=result.showapi_res_body.pagebean.contentlist;
            console.log(contenlist);
            var str = '';
            for(var i=0;i<contenlist.length;i++){
                str+='<li class="content-contain">'
                str+=' <div class="user">'
                str+='<div class="u-img">'
                str+='<a href="#"><img src='+contenlist[i].profile_image+' width="30px" height="30px" alt=""></a>'
                str+='</div>'
                str+='<div class="u-txt">'
                str +='<a href="#">'+contenlist[i].name+'</a>'
                str +='<span class="u-time">'+contenlist[i].create_time+'</span>'
                str +='</div>'
                str +='</div>'
                str +='<div class="c-list">'
                str +=' <p>'+contenlist[i].text+'</p>'
                if (contenlist[i].type==41){
                    str +='<video src='+contenlist[i].video_uri+' width="566px" height="360px " controls="controls"></video>'
                }else if (contenlist[i].type==10){
                    str +='<img src="'+contenlist[i].image0+'" width="566px" alt="">'
                }else if (contenlist[i].type==29){
                    str+=''
                }else if (contenlist[i].type==31){
                    str+=' <audio src='+contenlist[i].voice_uri+' controls="controls">'
                }
                str +='</div>'
                str +=' </li>'
            }
            $('#content-list-ul').html(str);
        }
    });
}
})