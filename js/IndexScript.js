$(document).ready(function () {

    //  Initialize Backgound Stretcher
    $('BODY').bgStretcher({
        images: ['images/sample-1.jpg', 'images/sample-2.jpg', 'images/sample-3.jpg', 'images/sample-4.jpg', 'images/sample-5.jpg', 'images/sample-6.jpg'],
        imageWidth: 1024,
        imageHeight: 768,
        slideDirection: 'N',
        slideShowSpeed: 1000,
        transitionEffect: 'fade',
        sequenceMode: 'normal',
        buttonPrev: '#prev',
        buttonNext: '#next',
        pagination: '#nav',
        anchoring: 'left center',
        anchoringImg: 'left center'
    });

});

var cnt = 0;

var bgcs = ["change1.jpg", "change2.jpg", "meizi3.jpg", "meizi4.jpg"];

function changeBgc()
{
    $("body").css("background", "url(" + bgcs[cnt % bgcs.length] + ") no-repeat fixed");
    cnt++;
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

function reSize()
{
    var frame2 = window.parent.document.getElementById("iFrame2");
    frame2.height = document.body.clientHeight + 120;
//        window.setInterval(changeBgc, 3500);
}

var frame1 = document.getElementById("iFrame1");
var frame2 = document.getElementById("iFrame2");
var frame3 = document.getElementById("iFrame3");