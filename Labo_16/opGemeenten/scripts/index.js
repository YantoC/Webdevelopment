const setup = () =>{
    // code laad na de pagina
    /*
            push() -> toevoegen
            pop()  -> deletes last one
     */
    let gemeentes = [];
    let loopen = true;

    while(loopen){
        let tekst = prompt("Geef een gemeente, \n\"stop\" voor te stoppen.", "gemeente");
        if (tekst === "stop"){
            loopen = false;
        }else{
            gemeentes.push(tekst);
        }

    }
    console.log(gemeentes);

    //sort nog doen
    gemeentes.sort();

    let lijst = document.getElementById("Gemeente");

    for (let i = 0; i < gemeentes.length; i++) {
        lijst.innerHTML += "<option value=\"\">" + gemeentes[i] + "</option>"
    }

}

window.addEventListener("load",setup);