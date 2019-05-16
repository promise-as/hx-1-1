"use strict";

$(function () {
    // 页眉 js
    $(".hxw-nav-list-last").hover(function () {
        $('.hxw-more').addClass("cur");
        $('.hxw-nav-others').css("display", "block");
        $('.hxw-nav-others').css("margin-left", '79px');
    }, function () {
        $('.hxw-nav-others').css("display", "none");
        $('.hxw-more').removeClass("cur");
    });
    $(".hxw-client-tl").hover(function () {
        $(".hxw-yd").addClass("cur");
        $('.hxw-dropdown').css("display", "block");
    }, function () {
        $('.hxw-dropdown').css("display", "none");
        $(".hxw-yd").removeClass("cur");
    });
    // 头部
    $('.hx-area').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.hx-city-box').find('.hx-city').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });
    // 首页轮播
    $(".slideBox").slide({ mainCell: ".bd ul", autoPlay: true });

    // tab切换
    $('.hx-tab li').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.hx-tab-box').find('.hx-tab-card').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });

    function CheckForm() {
        if (document.search_one.text_one.value == "") {
            alert("请输入需要搜索的关键词");
            document.search_one.text_one.focus();
            return false;
        } else {
            var urlstr = encodeURI(document.search_one.text_one.value);
            //var city = document.search_one.citymk.value;
            var urlx = 'http://zhannei.baidu.com/cse/search?s=6924920297305690263&entry=1&q=' + urlstr;
            //document.search_one.action = urlx;
            //document.search_one.submit();
            window.open(urlx);
        }
        return false;
    }
    theaMsForm();
    /*相关课程 轮播图*/
    $(".carousel").slide({
        mainCell: ".bd ul",
        autoPlay: true
    });

    /*面授列表*/
    $(".tcn-l-ms .tcn-ms-item").each(function (i, ele) {
        if ($(this).has("img").length) {
            // 有左边图片的时候
            $(this).children(".tcn-ms-nr").width("570px");
        } else {
            // 没有左边图片的时候
        }
    });
});