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

function genera_tabla() {
    
    //let reader = new FileReader();

    //reader.readAsText(file);

    //reader.onload = function() {
    //    console.log(reader.result);
    //};
    // Obtener la referencia del elemento body
    //var body = document.getElementById("contentTable");
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.getElementById("contentTable");
    var tblBody = document.getElementById("tableBody");
  
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Contacto "+i);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      tblBody.appendChild(hilera);
    }
  

    tabla.appendChild(tblBody);

}


//let loginb=document.getElementById("loginButton");
//loginb.addEventListener('click', validatelogin);

