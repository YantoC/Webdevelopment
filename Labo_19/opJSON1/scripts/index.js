const setup = () =>{
    // code laad na de pagina
    let student1 = {}
    student1.voornaam = "Yanto";
    student1.geboorteDatum = new Date("2004-06-03");
    student1.adres = {
        land: "Dubai",
        gemeente: "2541"
    }


    console.log(student1)
}

window.addEventListener("load",setup);