function reSize()
{
    var frame2 = window.parent.document.getElementById("iFrame2");
    frame2.height = document.body.clientHeight + 100;
}

function register(){
    var username = document.getElementById("registerUsername").value.toLowerCase();
    var password = document.getElementById("registerPassword").value;
    var passwordConfirm = document.getElementById("registerPasswordConfirm").value;
    var getUsername = document.getElementById(username);

    var getUserName = sessionStorage.getItem(username);
    if(!getUserName){
        if(username != "william" ||username != "david" ||username != "athena"){
            if(password == passwordConfirm){
                sessionStorage.setItem(username,password);
                alert("Register Success!");
            }
            else
                alert("Please check your password");
        }
    }
    else{
        alert("The name has been registered, please change it");
    }
}

function CheckIntensity(pwd){
    var Mcolor,Wcolor,Scolor,Color_Html;
    var m=0;
    var Modes=0;
    for(i=0; i<pwd.length; i++){
        var charType=0;
        var t=pwd.charCodeAt(i);
        if(t>=48 && t <=57){
            charType=1;
        }
        else if(t>=65 && t <=90){
            charType=2;
        }
        else if(t>=97 && t <=122){
            charType=4;
        }
        else{
            charType=4;
        }
        Modes |= charType;
    }
    for(i=0;i<4;i++){
        if(Modes & 1){
            m++;
        }
        Modes>>>=1;
    }
    if(pwd.length<=4){
        m=1;
    }
    if(pwd.length<=0){
        m=0;
    }
    switch(m){
        case 1 :
            Wcolor="pwd pwd_Weak_c";
            Mcolor="pwd pwd_c";
            Scolor="pwd pwd_c pwd_c_r";
            Color_Html="弱";
            break;
        case 2 :
            Wcolor="pwd pwd_Medium_c";
            Mcolor="pwd pwd_Medium_c";
            Scolor="pwd pwd_c pwd_c_r";
            Color_Html="中";
            break;
        case 3 :
            Wcolor="pwd pwd_Strong_c";
            Mcolor="pwd pwd_Strong_c";
            Scolor="pwd pwd_Strong_c pwd_Strong_c_r";
            Color_Html="强";
            break;
        default :
            Wcolor="pwd pwd_c";
            Mcolor="pwd pwd_c pwd_f";
            Scolor="pwd pwd_c pwd_c_r";
            Color_Html="无";
            break;
    }
    document.getElementById('pwd_Weak').className=Wcolor;
    document.getElementById('pwd_Medium').className=Mcolor;
    document.getElementById('pwd_Strong').className=Scolor;
    document.getElementById('pwd_Medium').innerHTML=Color_Html;
}