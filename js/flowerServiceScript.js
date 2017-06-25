
function generateFloatLayer(){
    alert("吓得我脑都残了");
    floatArea=document.getElementById("adver");
    floatArea.style.display="none";
    divClose='<div id="close" style="position:absolute; right:10px; top:10px; left:auto; bottom:auto;"><a href="javascript:closeFloat();">Close</a></div><br>';
    x=event.clientX + document.body.scrollLeft;
    y=event.clientY + document.body.scrollTop;
    floatArea.innerHTML=divClose+"<div id=\"floatcontent\"+<h1 style='color: deepskyblue'; font-family: Algerian '><center>Today's&nbsp Recommed</center></h1><br><p>&nbsp&nbspprice：300yuan<br>&nbsp&nbspCategory：Freshflower<br>&nbsp&nbspName:Rose <br>&nbsp&nbspThe same with star</p></div>";
    floatArea.style.border="black 1px solid";
    floatArea.style.left=(document.documentElement.scrollLeft+x-15)+"px";
    floatArea.style.top=(document.documentElement.scrollTop+y-10)+"px";
    floatArea.style.width="300px";
    floatArea.style.height="200px";
    floatArea.style.display="";
}

function closeFloat(){
    floatArea=document.getElementById("adver");
    floatArea.innerHTML="";
    floatArea.style.display="none";
}


function click_send(){
    alert("Received");
}

$(document).ready(function (e) {
    /*点击删除 清空输入框的内容*/
    $('.btn').click(function () {
        $('.text input').val('');
        $('.form-control ').val('');
    });
});
/*function OpenWindow(url,w,h)
 {
 var left=Math.round((window.screen.availWidth-w)/2);
 var top=Math.round((window.screen.availHeight-100-h)/2);
 var MyWin=window.open(url, "", "height="+h+", width="+w+",top="+top+",left="+left+", toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
 }*/