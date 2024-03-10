const setup = () =>{
    // code laad na de pagina
    const  spaties = () =>{
        let txtTekst = document.getElementById("txtTekst");
        let tekst = txtTekst.value

        let result = "";

        for (let i = 0; i < tekst.length; i++) {
            result += tekst.charAt(i)+ " ";
        }

        console.log(result);
    }

    let btnKopieer = document.getElementById("btnKopieer");

    btnKopieer.addEventListener("click", spaties)
}

window.addEventListener("load",setup);