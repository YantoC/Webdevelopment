const setup = () =>{
    // code laad na de pagina
    let student1 = {}
    student1.voornaam = "Yanto";
    student1.geboorteDatum = new Date("2004-06-03");
    student1.adres = {
        land: "Dubai",
        gemeente: "2541"
    }


    console.log("Naam: " + student1.voornaam + "\nGeboorte: " + student1.geboorteDatum.toDateString() + "\nadres: " +
        student1.adres.land + " " + student1.adres.gemeente)

}

window.addEventListener("load",setup);