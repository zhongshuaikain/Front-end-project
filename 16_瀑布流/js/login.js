$(function () {

    $('#switch_qlogin').click(function () {
        $('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
        $('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
        $('#switch_bottom').animate({left: '0px', width: '70px'});
        $('#qlogin').css('display', 'none');
        $('#web_qr_login').css('display', 'block');

    });
    $('#switch_login').click(function () {

        $('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
        $('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
        $('#switch_bottom').animate({left: '154px', width: '70px'});

        $('#qlogin').css('display', 'block');
        $('#web_qr_login').css('display', 'none');
    });
    if (getParam("a") == '0') {
        $('#switch_login').trigger('click');
    }

});

function logintab() {
    scrollTo(0);
    $('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
    $('#switch_bottom').animate({left: '154px', width: '96px'});
    $('#qlogin').css('display', 'none');
    $('#web_qr_login').css('display', 'block');
}


//根据参数名获得该参数 pname等于想要的参数名
function getParam(pname) {
    var params = location.search.substr(1); // 获取参数 平且去掉？
    var ArrParam = params.split('&');
    if (ArrParam.length == 1) {
        //只有一个参数的情况
        return params.split('=')[1];
    } else {
        //多个参数参数的情况
        for (var i = 0; i < ArrParam.length; i++) {
            if (ArrParam[i].split('=')[0] == pname) {
                return ArrParam[i].split('=')[1];
            }
        }
    }
}


var reMethod = "GET",
    pwdmin = 6;

$(document).ready(function () {


    $('#reg').click(function () {

        if ($('#user').val() == "") {
            $('#user').focus().css({
                border: "1px solid red",
                boxShadow: "0 0 2px red"
            });
            $('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
            return false;
        }

        if ($('#addr').val() == "") {
            $('#addr').focus().css({
                border: "1px solid red",
                boxShadow: "0 0 2px red"
            });
            $('#userCue').html("<font color='red'><b>×地址不能为空</b></font>");
            return false;
        }

        if ($('#tel').val() == "") {
            $('#tel').focus().css({
                border: "1px solid red",
                boxShadow: "0 0 2px red"
            });
            $('#userCue').html("<font color='red'><b>×电话不能为空</b></font>");
            return false;
        }


        if ($('#user').val().length < 4 || $('#user').val().length > 12) {

            $('#user').focus().css({
                border: "1px solid red",
                boxShadow: "0 0 2px red"
            });
            $('#userCue').html("<font color='red'><b>×用户名位4-12字符</b></font>");
            return false;

        }


        if ($('#passwd').val().length < 6 || $('#passwd').val().length > 20) {
            $('#passwd').focus();
            $('#userCue').html("<font color='red'><b>×密码为6-20位</b></font>");
            return false;
        }


        $('#regUser').submit();
    });


});