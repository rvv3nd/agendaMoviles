var counter= 1;

function addelement() {
var completelist= document.getElementById("thelist");

completelist.innerHTML += "<li>Item " + counter + "</li>";
counter++;
}

function validatelogin(e){
    var user = document.getElementById("usr").value;
    var pass = document.getElementById("psswrd").value;
    e.preventDefault();
    //if (user=="a" && pass=="e"){
        window.location.href = "../pages/contacts.html";
    //window.location.redirect("../pages/contacts.html");
    //}
    return true
}

//let loginb=document.getElementById("loginButton");
//loginb.addEventListener('click', validatelogin);

