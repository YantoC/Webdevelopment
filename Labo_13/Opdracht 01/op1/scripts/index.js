const setup = () =>{
    // code laad na de pagina
    window.alert("alert test")
    window.prompt("schrijf iets","hier")
    window.confirm("zeker?")

    console.log(window.confirm("zeker?"))

    console.log(window.prompt("d","t"))
}

window.addEventListener("load",setup);