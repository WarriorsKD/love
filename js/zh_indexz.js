/**
 * Created by Administrator on 2017/9/1 0001.
 */
function my$(id) {
    return document.getElementById(id);
}

var kuang = my$("zh_kuang");
//相框的宽度
var kuWidth = kuang.offsetWidth;
var ulObj = kuang.children[0];
var listObj = ulObj.children;
var foncus = my$(arr);
var foleft = my$("left");
var foRight = my$("right");
//下面选择
var xuan = my$("zh_xuan");
var xuBo = my$("zh_xu_bo");
//底部横线left的值
var boleft = xuBo.offsetLeft;
//底部横线的宽度的值
var boWid = xuBo.offsetWidth;
var xuUObj = my$("xu_ul");
var xuLists = xuUObj.children;
//当鼠标点击下面的选择框时，使底部线条移动（设置left值）,是图片整体ul移动
var lunshu = 0;
for (var i = 0; i < xuLists.length; i++) {
    xuLists[i].setAttribute("index", i);
    xuLists[i].onmouseover = function () {
        lunshu = this.getAttribute("index");
        var bole = boleft + lunshu * boWid;
        animate(xuBo, {"left": bole});
        console.log(boleft);
        console.log(boWid);
        var yiDong = -lunshu * kuWidth;
        //animate1(ulObj,yiDong);
        animate(ulObj, {"left": yiDong});
    }
}
/*自动轮播*/
//先克隆一份图片添加到最后，使他进行无缝连接
ulObj.appendChild(listObj[0].cloneNode(true));
var timeId = setInterval(Handel, 1000);
function Handel() {
    if (lunshu == listObj.length - 1) {//长度4，lunshu最大3
        lunshu = 0;
        ulObj.style.left = -(lunshu * kuWidth + "px");
    }
    lunshu++;
    var yiDong = -lunshu * kuWidth;
    //animate1(ulObj,yiDong);
    animate(ulObj, {"left": yiDong});
    //图片动完之后，底部的线移动
    if (lunshu == listObj.length - 1) {
        lunshu = 0;
        var bole = boleft + lunshu * boWid;//原先左边距+移动距离
        animate(xuBo, {"left": bole});
    } else {
        var bole = boleft + lunshu * boWid;//原先左边距+移动距离
        animate(xuBo, {"left": bole});
    }

}
kuang.onmouseover = function () {
    arr.style.display = "block";
    clearInterval(timeId);
}
kuang.onmouseout = function () {
    arr.style.display = "none";
    timeId = setInterval(Handel, 1000);
}

//焦点
lunshu = 0;
foRight.onclick = Handel;
left.onclick = function () {
    if (lunshu == 0) {
        lunshu = listObj.length - 1;
        ulObj.style.left = -lunshu * kuWidth + "px";
    }
    lunshu--;
    var yiDong = -lunshu * kuWidth;
    //animate1(ulObj,yiDong);
    animate(ulObj, {"left": yiDong});
    var bole = boleft + lunshu * boWid;//原先左边距+移动距离
    animate(xuBo, {"left": bole});

}
//轮播图完成
//新人优选头部
//var newMan = my$("zh_nemMab");
//var neImgObj = newMan.getElementsByTagName("img");
//changeOp(neImgObj);

//新人优主体
var newBot = my$("zh_xy_bott");
var neBotImgs = newBot.getElementsByTagName("img");
changeOp(neBotImgs);

//新特卖
var neTeMai = my$("zh_cont");
var neTeImgs = neTeMai.getElementsByTagName("img");
changeOp(neTeImgs);
//女人装
var womanZhu = my$("zh_woman");
var womanImgs = womanZhu.getElementsByTagName("img");
changeOp(womanImgs);
//明日预告
var tomor = my$("zh_tomor");
var tomorImgs = tomor.getElementsByTagName("img");
changeOp(tomorImgs);
//图片透明度的函数
function changeOp(elements) {
    for (var i = 0; i < elements.length; i++) {
        //每张图片都是设置鼠标进入事件，进入透明度减小
        elements[i].onmouseover = function () {
            var that = this;
            animate1(this, {"opacity": .4}, function () {
                // console.log("zhixingl");
                animate1(this, {"opacity": 1});

            }.bind(that));

        }
    }
}
/*新人优选好货头部*/
$(function () {
    for (var i = 0; i < $(".zh_1").length; i++) {
        $(".zh_1").eq(i).mouseover(function () {
            $(this).stop().animate({
                opacity: 1,
                height: 105,
                width: 105,
                borderRadius:55
            },1000).parent().parent().siblings().animate({opacity: 0.4});

            $(this).next("p").css({color: "red", fontSize: 12, lineHeight: "15px"});
            $(this).addClass("yinying");

        });
        $(".zh_1").eq(i).mouseout(function () {
            $(this).animate({height: 98, width: 98, opacity: 1, borderRadius:0}, 0)
                .parent().parent().siblings("li").animate({opacity: 1}, 0);
            $(this).next("p").css({color: "#333", fontSize: 14, lineHeight: "15px"});
        });

    }

});
/*//新人优选底部图片的显示*/
$(function () {
    //console.log($(".zh_xy_fu1 img"));
    for (var i = 0; i < $(".zh_xy_fu1 ").length; i++) {
        $(".zh_xy_fu1 ").eq(i).mouseover(function () {
            $(this).children(".i2").stop().slideDown(1000);
            $(this).children(".i1").stop().slideDown(1000);
            $(this).children().children("img").animate({
                width: 90,
                height: 90
            },1000);
            $(this).children().children("p").css({
                top:35,
                color:"red",
                zIndex:2,
                fontWeight:700,
                backgroundColor:"white",

            });

        }).mouseout(function(){
            $(this).children(".i2").stop().slideUp(1000);
            $(this).children(".i1").stop().slideUp(1000);
            $(this).children().children("img").stop().animate({
                width: 68,
                height: 68
            },1000);
            $(this).children().children("p").css({
                top:75,
                color:"#333",
                zIndex:0,
                fontWeight:400,
                backgroundColor:"white",

            });
        });
    }
});
/*//新特区头部手风琴*/
$(function(){

    //console.log($(".zh_xin_top img"));
    for(var i=0;i< $(".zh_xin_top img").length;i++){
        $(".zh_xin_top img").eq(i).mouseover(function(){
            $(".zh_xin_top img").stop().animate({width:235})
            $(this).stop().animate({width: 490});
            $(this).css({
                borderRadius:55
            });
        }).mouseout(function(){
            $(".zh_xin_top img").stop().animate({width:320})
            //$(this).stop().animate({width: 490});
            $(this).css({
                borderRadius:0
            });
        });
    }

});
/*新特区的浮起图片的改变*/
$(function(){
   //console.log($(".zh_fu_top img"))
    for(var i=0;i<$(".zh_fu_top img").length;i++){
        $(".zh_fu_top img").eq(i).mouseover(function(){
           // $(this).parent("a").show(2000);
            $(this).parent("a").stop().animate({ borderRadius:70})
                .animate({ borderRadius:30})
                .animate({ borderRadius:80})
                .animate({ borderRadius:20});
            $(this).stop().animate({height:130,width:120})

        }).mouseout(function(){
            $(this).parent("a").css({ borderRadius:70});

            $(this).css({height:153,width:121})
        });
    }
    //for(var j=0;j<$(".zh_fu_top").length;j++){
    //    $(".zh_fu_top").eq(j).mouseover(function(){
    //        // $(this).parent("a").show(2000);
    //        $(this).parent("a").css({ borderRadius:50});
    //
    //        $(this).css({height:153,width:121})
    //
    //    });
    //}
});
//女装品牌
//女装区
/*$(function(){
    var ulObj = $("#zh_w_kuang").children("ul");
    function f1() {
        var current = ulObj.offsetTop;
        current -= 10;//每次移动的位置：因为向左移动，ul整体最左边变小。所以用负号

        if (current < -1225) {//ul整体最左边超过-1200，就跳转到开头
            ulObj.css({
                top:0
            })
        } else {
            ulObj.css({top:current});
        }
    }
    var timeId = setInterval(f1, 50);
    $("#zh_w_kuang").mouseover(function(){
        clearInterval(timeId);//鼠标进入之后，清理定时器
    })
    .mouseout (function () {
        timeId = setInterval(f1, 50);
    });

})*/
//var ulObj = my$("zh_w_kuang").children[0];
//function f1() {
//    var current = ulObj.offsetTop;
//    current -= 10;//每次移动的位置：因为向左移动，ul整体最左边变小。所以用负号
//
//    if (current< -1225) {//ul整体最左边超过-1200，就跳转到开头
//        ulObj.style.top = "0px";
//    } else {
//        ulObj.style.top = current + "px";
//    }
//}
//var timeId3 = setInterval(f1, 1000);
//my$("zh_w_kuang").onmouseover = function () {
//    clearInterval(timeId3);//鼠标进入之后，清理定时器
//};
//my$("zh_w_kuang").onmouseout = function () {
//    timeId3 = setInterval(f1,1000);
//};
var neTeMai = my$("zh_cont");
var neTeImgs = neTeMai.getElementsByTagName("img");
var neTeImgs = neTeMai.getElementsByTagName("img");
for (var i = 0; i < neTeImgs.length; i++) {
    //每张图片都是设置鼠标进入事件，进入透明度减小
    neTeImgs[i].onmouseover = function () {
        var that = this;
        animate1(this, {"opacity": .4}, function () {
            // console.log("zhixingl");
            animate1(this, {"opacity": 1});
        }.bind(that));

    }
}
//新特卖区的鼠标进入离开事件
var newFu = document.getElementsByClassName("zh_main1");
teQuXIan(newFu);
//鼠标进入与离开事件,显示，隐藏
function teQuXIan(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].onmouseover = function () {
            var fuQu = this.getElementsByClassName("zh_ma1_fu");
            fuQu[0].style.display = "block";
        }
        elements[i].onmouseout = function () {
            var fuQu = this.getElementsByClassName("zh_ma1_fu");
            fuQu[0].style.display = "";
        }
    }

}

//新特卖去点击收藏和进入会场
var zhbottom = document.getElementsByClassName("zh_fu_bottom");
//收藏图片改变
var zushou = document.getElementsByClassName("im");
changAddr(zushou, "img/zh_fu_bot2.png", "img/zh_fu_bot1.png");
//收藏女装一下的
var zhshou1 = document.getElementsByClassName("im1");
changAddr(zhshou1, "img/woman_shoucang1.png", "img/woman_shoucang2.png");
//鼠标进入离开点击收藏图片地址的转换src===以前的地址

function changAddr(elements, src, lastsrc) {
    for (var i = 0; i < elements.length; i++) {
        // var nameObj = elements[i].getElementsByTagName("img")[1];
        var lastAdd;
        elements[i].setAttribute("k", 2);
        elements[i].onmouseover = function () {
            var k = this.getAttribute("k");
            console.log(k);
            if (k % 2 == 0) {
                lastAdd = this.src;
                this.src = lastsrc;
                console.log("进入2")
            } else {
                lastAdd = this.src;

                console.log("进入1")
            }

        }


        elements[i].onclick = dianidan;
        function dianidan() {
            //点一下
            var k = this.getAttribute("k");
            console.log("点击" + k);
            this.src = ( k % 2 == 0) ? lastsrc : src;
            lastAdd = this.src;
            // flag = false;
            k++;
            this.setAttribute("k", k);

        }

        elements[i].onmouseout = function () {
            this.src = lastAdd;//只进去，不点击
            k = 2;
            //elements[i].setAttribute("k", 2);
            console.log("离开");

        }


    }
}

//女装中的收藏改变

//var zhwoman = document.getElementsByClassName("zh_woMain");
//收藏图片改变

//专场的改变
var zhShanObj = document.getElementsByClassName("zh_bott2");
changeBgc(zhShanObj, "#333333", "#ffffff");
function changeBgc(elements, src, col) {
    for (var i = 0; i < zhShanObj.length; i++) {
        zhShanObj[i].onmouseover = function () {
            this.style.backgroundColor = src;
            this.style.color = col;
        }
        zhShanObj[i].onmouseout = function () {
            this.style.backgroundColor = "";
            this.style.color = "";
        }
    }
}

/**
 * <!--明日预告-->*/

var tomShou = document.getElementsByClassName("zh_toMain");
//changAddr(tomShou, "img/woman_shoucang1.png", "img/woman_shoucang2.png");

$(function () {
    //父元素
    $("#zh_toM1").mouseover(function () {
        $("#zh_toM1 .zh_sheyi").eq(0).show();
        //$("#zh_toM1 .tixin2").eq(0).click(function(){
        //    $("#zh_toM1 .xit").eq(0).show();
        //    console.log("dddddddddddddd");
        //});
    });
    $("#zh_toM1").mouseout(function () {
        console.log("sdwfheuf");
        $("#zh_toM1 .zh_sheyi").eq(0).hide();
    });
});


/*tom.onmouseout=function(){
 //console.log(this);
 var sheyi=this.getElementsByClassName("zh_sheyi")[0];
 // console.log(sheyi);
 sheyi.style.display="none";
 var tixin2=this.getElementsByClassName("tixin2")[0];
 var xit=this.getElementsByClassName("xit")[0];

 this.onmouseout=function(){
 xit.style.display="none";
 }


 }*/
/*
 * element---任意的元素
 * attr---属性
 * */
function getAttrValue(element, attr) {
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr] || 0;
}

function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//假设都达到了目标
        for (var attr in json) {
            if (attr == "opacity") {//判断属性是不是opacity
                var current = getAttrValue(element, attr) * 100;
                //每次移动多少步
                var target = json[attr] * 100;//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//判断属性是不是zIndex
                element.style[attr] = json[attr];
            } else {//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//如果没到目标结果就为false
            }
        }
        if (flag) {//结果为true
            clearInterval(element.timeId);
            if (fn) {//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
        //  console.log("target:" + target + "current:" + current + "step:" + step);
    }, 10);
}


function animate1(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//假设都达到了目标
        for (var attr in json) {
            if (attr == "opacity") {//判断属性是不是opacity
                var current = getAttrValue(element, attr) * 100;
                //每次移动多少步
                var target = json[attr] * 100;//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//判断属性是不是zIndex
                element.style[attr] = json[attr];
            } else {//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//如果没到目标结果就为false
            }
        }
        if (flag) {//结果为true
            clearInterval(element.timeId);
            if (fn) {//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
        //  console.log("target:" + target + "current:" + current + "step:" + step);
    }, 70);
}
function time(){
    alert("我爱你.");
}setInterval("time()",10000);