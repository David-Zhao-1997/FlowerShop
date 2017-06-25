$(function () {
    // Load the classic theme
    $(window).resize(function () {
//                $("#galleria").width(window.screen.width);
    });
    Galleria.loadTheme('galleria.classic.min.js');
    // Initialize Galleria
//            Galleria.run('#galleria');
    $('#galleria').galleria({
        transition: 'fade',
        autoplay: 1500,
//                width: window.screen.width,
//                height: 300
    });
//            console.log(window.screen.width);

});


var cnt = 0;
var bgcs = ["change1.jpg", "change2.jpg", "meizi3.jpg", "meizi4.jpg"];

function changeBgc()
{
    $("body").css("background", "url(" + bgcs[cnt % bgcs.length] + ")");
    cnt++;
}

// window.setInterval(changeBgc, 2000);

function subShow(div)
{
    var a = div.childNodes;
    a[3].style.display = "block";
}

function subHide(div)
{
    var a = div.childNodes;
    a[3].style.display = "none";
}

var frame2 = window.parent.document.getElementById("iFrame2");
frame2.height = document.body.clientHeight + 120;

function resize()
{
    var frame2 = window.parent.document.getElementById("iFrame2");
    frame2.height = document.body.clientHeight + 120;
}

function picClicked(img)
{
    sessionStorage.setItem("clickedPic", img.id);
    window.parent.bodyFrame.location = "detail.html";
}

function subShowlog(div)
{
    var a = div.childNodes;
    /* alert(a.length);*/
    a[1].style.display = "block";
}

function subHidelog(div)
{
    var a = div.childNodes;
    a[1].style.display = "none";
}