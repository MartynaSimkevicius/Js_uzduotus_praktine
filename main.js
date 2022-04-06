let formaReg = document.querySelector("form");
let spausdinti = document.getElementById("btn-list");
let list_html = document.getElementById("list");
let listas = [];
formaReg.addEventListener("submit", function (e) {
    e.preventDefault();
    let vardas = formaReg["vardas"].value;
    let pavarde = formaReg["pavarde"].value;
    let mokykla = formaReg["mokykla"].value;
    let miestas = formaReg["miestas"].value;
    let sritis = formaReg["sritis"].value;
    // surinkti į objketą
    let user = [vardas, pavarde, mokykla, miestas, sritis];
    // pridėti į masyvą
    listas.push(user);
})
spausdinti.addEventListener("click", function (e) {
    var child = list_html.lastElementChild;
    while (child) {
        list_html.removeChild(child);
        child = list_html.lastElementChild;
    }
    for (var i = 0; i < listas.length; i++) {
        let li = document.createElement("li");
        li.textContent = listas[i].join(',');
        list_html.appendChild(li);
    }
})