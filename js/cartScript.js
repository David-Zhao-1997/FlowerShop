var numArr = [];
function reSize()
{
    var frame2 = window.parent.document.getElementById("iFrame2");
    frame2.height = document.body.clientHeight + 240;
}

function setNums()
{
    if (localStorage.getItem("numArr") != null)
    {
        var numArr = JSON.parse(localStorage.getItem("numArr"));
        var nums = document.getElementsByClassName("number");
        for (var i = 0; i < nums.length; i++)
        {
            if (numArr[nums.length - i - 1] != null)
                nums[i].value = numArr[nums.length - i - 1];
            else
                nums[i] = 1;
        }
    }
    calTotalPrice();
}

function addListeners()
{
    var deleteBtn = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteBtn.length; i++)
    {
        (function (i) {
            deleteBtn[i].onclick = function () {
                delRow(i + 1);
            }
        })(i);
    }
}

function delRow(idx)
{
    table.tBodies[0].deleteRow(idx);
    cartItems.splice(idx - 1, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    addListeners();
    calTotalPrice();
    reSize();
}

function calTotalPrice()
{
    var sum = 0;
    var nums = document.getElementsByClassName("number");
    for (var i = 0; i < cartItems.length; i++)
    {
        numArr[i] = Number(nums[i].value);
        sum += nums[i].value * priceArr[cartItems[i]];
    }
    document.getElementsByClassName("set-stat")[0].innerHTML = "￥" + sum;
    localStorage.setItem("numArr", JSON.stringify(numArr.reverse()));
}

cartItems = JSON.parse(localStorage.getItem("cartItems"));
//    alert(cartItems);
for (var i = 0; i < cartItems.length; i++)
{
    var tr = table.insertRow(table.tBodies[0].rows.length);
    var td0 = tr.insertCell(tr.cells.length);
    var td1 = tr.insertCell(tr.cells.length);
    var td2 = tr.insertCell(tr.cells.length);
    var td3 = tr.insertCell(tr.cells.length);
    var td4 = tr.insertCell(tr.cells.length);
    var picSrc = "img/FloImage/f" + (cartItems[i] + 1) + ".png";
    td0.innerHTML = "<img height='48' src=" + picSrc + ">";
    td1.innerHTML = floNameArr[cartItems[i]];
    td2.innerHTML = priceArr[cartItems[i]];
    td3.innerHTML = "<input class='number' type='number' value='1' oninput='calTotalPrice()'/>";
    td4.innerHTML = "<a class='delete'>Delete</a>";
}
addListeners();
setNums();
calTotalPrice();