const setup = () =>{
    // code laad na de pagina
   const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;

        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerHTML = tekst
        console.log(tekst);
    }

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer)
}

window.addEventListener("load",setup);