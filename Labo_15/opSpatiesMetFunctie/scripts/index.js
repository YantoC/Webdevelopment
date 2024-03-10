const setup = () =>{
    // code laad na de pagina
    const  spaties = () =>{
        let txtTekst = document.getElementById("txtTekst");
        let tekst = txtTekst.value

        console.log(maakMetSpaties(tekst));
    }
    const  maakMetSpaties = (inputText) => {
        let result = "";

        for (let i = 0; i < inputText.length; i++) {
            result += inputText.charAt(i)+ " ";
        }

        return result;
    }

    let btnKopieer = document.getElementById("btnKopieer");

    btnKopieer.addEventListener("click", spaties)
}

window.addEventListener("load",setup);