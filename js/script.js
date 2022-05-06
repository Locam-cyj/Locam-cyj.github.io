let user = "zhoujiamin";
let pwd = "0507";
$(function(){
    if(document.getElementById("check").checked == true){
        //document.getElementById("user").value=user;
        //document.getElementById("pwd").value=pwd;
        $("#user").val(user);
        $("#pwd").val(pwd);
    }else {
        $("#user").val("");
        $("#pwd").val("");
    }
    $(".loginbtn").click(function(){
        if($("#user").val() == user && $("#pwd").val() == pwd){
            self.location="welcome.html";
        }
        else{
            alert("账号密码错误！");
            return false;
        }
    });
});