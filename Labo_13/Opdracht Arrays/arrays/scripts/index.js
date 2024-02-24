const setup = () =>{
    // code laad na de pagina
    const familieLeden = ["rik","an","jan","indy","filou"]

    console.log(familieLeden.length)

    console.log(familieLeden[0])
    console.log(familieLeden[2])
    console.log(familieLeden[4])

    let naam = prompt("geef een extra naam",'hier typen')
    function VoegNaamToe(naam){
        familieLeden.push(naam)
        console.log(familieLeden)
    }

    VoegNaamToe(naam)

    console.log(familieLeden.toString())
}

window.addEventListener("load",setup);