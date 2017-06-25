var album = document.getElementById("album");
var clickedPic = sessionStorage.getItem('clickedPic');
/*动态创建图片元素*/
var thumbnailPath = "img/detailImage/" + clickedPic + "/";
var sourcePath = "img/detailImage/" + clickedPic + "/";
var flag = 0;
for (var i = 1; i <= 4; i++)
{
    var newLi = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("data-original", thumbnailPath + i + ".jpg");
    img.setAttribute("src", sourcePath + i + ".jpg");
    img.setAttribute("alt", "图片" + i);
    img.setAttribute("onclick", "window.parent.scrollTo(0,120);flag = 1;");
    img.setAttribute("onmouseout", "if(flag){window.parent.document.getElementById(\"iFrame2\").height = '600';flag=0;}else{}");
    // img.setAttribute("onblur",resize());
    newLi.appendChild(img);
    album.appendChild(newLi);
}
$(function () {
    $('#album').viewer({
        url: 'data-original',
        hidden: function () {
            reSize();
        }
    });
});

var detail = document.getElementById("detail");
var detailPath = "img/details/" + clickedPic + "/";
for (var i = 1; i <= 3; i++)
{
    var newImg = document.createElement("img");
    newImg.setAttribute("src", detailPath + i + ".jpg");
    detail.appendChild(newImg);
}

function getNum(text)
{
    var value = text.replace(/[^0-9]/ig, "");
    return value;
}

function reSize()
{
    var frame2 = window.parent.document.getElementById("iFrame2");
    frame2.height = document.body.clientHeight + 120;
}

var clickedPic = sessionStorage.getItem('clickedPic');//获取被点击图片的id
var no = getNum(clickedPic);
var price = priceArr[no - 1];
var detail = detailArr[no - 1];
var floName = floNameArr[no - 1];
document.getElementById("title").innerHTML = floName;
// document.getElementById("detail").innerHTML = detail;
document.getElementById("price").innerHTML = "￥" + price;


function addToCart()
{
    var cartItems = [];
    if (localStorage.getItem("cartItems") != null)
    {
        cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    if ($.inArray(no - 1, cartItems))
    {
        cartItems.splice(0, 0, no - 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        alert("Added to Cart!");
    }
    else
    {
        alert("Already added!");
    }
}

window.parent.scrollTo(0, 0);