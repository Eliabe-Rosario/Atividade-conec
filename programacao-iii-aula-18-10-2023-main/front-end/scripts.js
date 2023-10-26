function getClients() {
    var xhttp = new XMLHttpRequest();
    var clientTable = document.getElementById("client");

    clientTable.innerHTML = '';

    xhttp.open("GET", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var clients = JSON.parse(xhttp.responseText);
            var clientTable = document.getElementById("client");
            
            console.log(clients);

            for (var i = 0; i < clients.length; i++) {
                var client = clients[i];
                var row = document.createElement("tr");

                var nameCell = document.createElement("td");
                nameCell.textContent = client.name;

                var lastNameCell = document.createElement("td");
                lastNameCell.textContent = client.lastName;

                var documentCell = document.createElement("td");
                documentCell.textContent = client.document;

                row.appendChild(nameCell);
                row.appendChild(lastNameCell);
                row.appendChild(documentCell);

                clientTable.appendChild(row);
            }
        }
    };

    xhttp.send();
}


function postClient(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader('Content-Type', 'application/json');

    let client = {
        "name": document.getElementById("name").value,
        "lastName": document.getElementById("lastname").value,
        "document": document.getElementById("document").value
    };

    xhttp.onreadystatechange = function () {
        

        if (xhttp.readyState == 4 && xhttp.status == "200") {
            console.log(xhttp.responseText);
            alert("cliente cadastrado com sucesso!");
        }
    }
    xhttp.send(JSON.stringify(client));
}function getClients() {
    var xhttp = new XMLHttpRequest();
    var clientTable = document.getElementById("client");

    clientTable.innerHTML = '';

    xhttp.open("GET", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var clients = JSON.parse(xhttp.responseText);
            var clientTable = document.getElementById("client");
            
            console.log(clients);

            for (var i = 0; i < clients.length; i++) {
                var client = clients[i];
                var row = document.createElement("tr");

                var nameCell = document.createElement("td");
                nameCell.textContent = client.name;

                var lastNameCell = document.createElement("td");
                lastNameCell.textContent = client.lastName;

                var documentCell = document.createElement("td");
                documentCell.textContent = client.document;

                row.appendChild(nameCell);
                row.appendChild(lastNameCell);
                row.appendChild(documentCell);

                clientTable.appendChild(row);
            }
        }
    };

    xhttp.send();
}


function postClient(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader('Content-Type', 'application/json');

    let client = {
        "name": document.getElementById("name").value,
        "lastName": document.getElementById("lastname").value,
        "document": document.getElementById("document").value
    };

    xhttp.onreadystatechange = function () {
        

        if (xhttp.readyState == 4 && xhttp.status == "200") {
            console.log(xhttp.responseText);
            alert("cliente cadastrado com sucesso!");
        }
    }
    xhttp.send(JSON.stringify(client));
}