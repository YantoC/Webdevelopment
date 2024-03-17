const setup = () =>{
    // code laad na de pagina
    const uitvoeren = () =>{
        //Roker
        let roker = document.getElementById("roker").checked;
        if (roker){
            console.log("is een roker")
        }else{
            console.log("is geen roker")
        }

        //Moedertaal
        let MoedertaalNL = document.getElementById("nl").checked;
        let MoedertaalFR = document.getElementById("fr").checked;
        let MoedertaalEN = document.getElementById("en").checked;

        if (MoedertaalNL){
            console.log("Moedertaal is nl")
        }else if (MoedertaalFR){
            console.log("Moedertaal is fr")
        }else if (MoedertaalEN){
            console.log("Moedertaal is en")
        }else{
            console.log("Niet aangeduid")
        }

        // Buurland
        let buurland = document.getElementById("Fbuurland").value;

        if (buurland == "nl"){
            console.log("Favoriete buurland is Nederlands")
        }else if (buurland == "fr"){
            console.log("Favoriete buurland is Frankrijk")
        }else if (buurland == "dl"){
            console.log("Favoriete buurland is Duitsland")
        }

        // Bestelling
        let bestelling = document.getElementById("bestellingen").values;

        console.log("bestelling bestaat uit " + bestelling);
    }

    let knop = document.getElementById("btnResultaat");

    knop.addEventListener("click", uitvoeren);
}

window.addEventListener("load",setup);