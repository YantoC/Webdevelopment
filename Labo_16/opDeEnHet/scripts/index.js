const setup = () =>{
    // code laad na de pagina

    let tekst = "Gisteren zat de jongen op de stoep en at helft van de appel";
    tekst = tekst.split(" ");

    for (let i = 0; i < tekst.length; i++) {
        // if (!tekst[i].localeCompare("de")){
        //     tekst[i] = "het"
        // }
        if (tekst[i] === "De"){
            tekst[i] = "Het";
        }else if(tekst[i] === "de"){
            tekst[i] = "het";
        }
    }

    console.log(tekst.join(" "));
}

window.addEventListener("load",setup);