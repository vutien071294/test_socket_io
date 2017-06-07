$(document).ready(function(){
    $('.panel.panel-chat > .panel-body').hide();
    $('.panel.panel-chat > .panel-footer').hide();
    $('.panel.panel-chat > .confirm_info').hide();
    
    //Thiết lập cookie
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000)); // xét thười gian  cho cookie. exday <=> giờ
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    // Hàm lấy Cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }


    $(function(){
        $(".chatMinimize").click(function(){
            var chat_name_user = getCookie('chat_name_user');
            var chat_email_user = getCookie('chat_email_user');
            var chat_phone_user = getCookie('chat_phone_user');
            console.log(chat_name_user);
            console.log(chat_email_user);
            console.log(typeof(chat_phone_user));
            if(!$(this).parent().parent().hasClass('mini'))
            {
                $(this).parent().parent().removeClass('normal').addClass('mini');

                $('.panel.panel-chat > .panel-body').animate({height: "250px"}, 500).show();

                $('.panel.panel-chat > .confirm_info').animate({height: "250px"}, 500).show();

                $('.panel.panel-chat > .panel-footer').animate({height: "75px"}, 500).show();
            }
            else
            {
                $(this).parent().parent().removeClass('mini').addClass('normal');

                $('.panel.panel-chat > .panel-body').animate({height: "0"}, 500);
                
                $('.panel.panel-chat > .confirm_info').animate({height: "0"}, 500);

                $('.panel.panel-chat > .panel-footer').animate({height: "0"}, 500);

                setTimeout(function() {
                    $('.panel.panel-chat > .panel-body').hide();
                    $('.panel.panel-chat > .panel-footer').hide();
                    $('.panel.panel-chat > .confirm_info').hide();
                }, 500);

            }

        });
        
    })

});