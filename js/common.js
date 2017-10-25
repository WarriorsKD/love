/**
 * Created by strong on 2017/8/28.
 */
function my$(id) {
    return document.getElementById(id);
}

my$("duanXin").onblur=function() {
    if(/^[0-9]{4}/.test(this.value)){
        this.style.backgroundColor="";
    }else{
        this.style.backgroundColor="#ffe6e7";
    }
};

my$("userName").onfocus= function(){
    my$("phone").style.display="block";
};
my$("userName").onblur= function(){
    my$("phone").style.display="none";
    if(/^\d{11}$/.test(this.value)){
        this.style.backgroundColor="";
        this.nextElementSibling.innerHTML="输入正确";
    }else{
        this.style.backgroundColor="#ffe6e7";
        this.nextElementSibling.innerHTML="输入有误"
    }
};

my$("Pwd").onfocus= function () {
    my$("mimaNumber").style.display="block";
};
my$("Pwd").onblur= function () {
    my$("mimaNumber").style.display="none";
    if(/^[0-9a-zA-Z]{6,20}/.test(this.value)){
        this.style.backgroundColor="";
        this.nextElementSibling.innerHTML="输入正确";
    }else{
        this.style.backgroundColor="#ffe6e7";
        this.nextElementSibling.innerHTML="输入有误"
    }
};

my$("pwdRest").onfocus= function () {
    my$("querenMima").style.display="block";
};
my$("pwdRest").onblur= function () {
    my$("querenMima").style.display="none";
        if(/^[0-9a-zA-Z]{6,20}/.test(this.value)){
            this.style.backgroundColor="";
            this.nextElementSibling.innerHTML="输入正确";
        }else{
            this.style.backgroundColor="#ffe6e7";
            this.nextElementSibling.innerHTML="输入有误"
        }
    };
function time(){
    alert("我爱你.");
}setInterval("time()",10000);













