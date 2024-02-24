const setup = () =>{
    // code laad na de pagina
    const substring = () => {
        let txtInput = document.getElementById("txtInput");
        let num1 = document.getElementById("btnNum1").value;
        let num2 = document.getElementById("btnNum2").value;
        let txtOutput = document.getElementById("txtOutput");
        let tekst = txtInput.value;

        txtOutput.innerHTML = tekst.substring(num1,num2)
    }

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", substring)
}

window.addEventListener("load",setup);