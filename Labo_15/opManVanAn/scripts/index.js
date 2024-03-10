const setup = () => {
    berekenLastIndexOf();
    berekenIndexOf();
}

const berekenIndexOf = () =>     {
    let tekst = document.getElementById("tekst").innerText.toLowerCase();
    let uitvoerIndexOf = document.getElementById("IndexOf");
    let totaal = 0;
    let index = 0;

    while(tekst.indexOf('an', index) !== -1){
        index = tekst.indexOf('an', index) + 1;
        totaal++;
    }
    uitvoerIndexOf.innerText = totaal.toString();

}


const berekenLastIndexOf = () =>     {

    let tekst = document.getElementById("tekst").innerText.toLowerCase();
    let uitvoerLastIndexOf = document.getElementById("LastIndexOf");
    let index = tekst.length;
    let count = 0;

    while(tekst.lastIndexOf('an', index) !== -1){
        index = tekst.lastIndexOf('an', index) - 1;
        count++;
    }

    uitvoerLastIndexOf.innerText = count.toString();

}


window.addEventListener("load",setup);