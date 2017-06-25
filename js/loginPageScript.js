function jump()
{
    reSize();
    if (sessionStorage.getItem("guestFlag") == "true")
    {
        window.parent.bodyFrame.location = "homeBody.html";
    }
}

function validate()
{
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value;
    if (username != "")
    {
        if (password != "")
        {
            if (username == "william" && password == "123456")
            {
                alert("Login Success");
                sessionStorage.setItem("currentUser", "william");
            }
            else if (username == "david" && password == "123456")
            {
                alert("Login Success");
                sessionStorage.setItem("currentUser", "david");
            }
            else if (username == "athena" && password == "123456")
            {
                alert("Login Success");
                sessionStorage.setItem("currentUser", "athena");
            }
            else if (sessionStorage.getItem(username) == password)
            {
                alert("Login Success");
                sessionStorage.setItem("currentUser", username);
            }
            else
            {
                alert("Username and password are not matched, please check!");
            }
        }
        else
        {
            alert("Please enter your password!");
        }
    }
    else
    {
        alert("Please enter username!");
    }
}

function reSize()
{
    var frame2 = window.parent.document.getElementById("iFrame2");
    frame2.height = document.body.clientHeight + 50;
}