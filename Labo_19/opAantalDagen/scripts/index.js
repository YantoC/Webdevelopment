const setup = () =>{
    // code laad na de pagina
    let geboorte = new Date(2004,5,3);
    let dag = new Date();

    let aantalDagen =  (dag - geboorte)/ (1000 * 60 * 60 *24) ;


    console.log("Ik leef al: "+ Math.round(aantalDagen) + " dagen")

}

window.addEventListener("load",setup);