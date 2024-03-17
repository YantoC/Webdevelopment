const setup = () =>{
    // code laad na de pagina
    let tekst = "onoorbaar";
    let ar = tekst.split("")

    // kan prob ook met for loop
    let index = 0;
    let einde = true;

    while(einde){
        console.log(ar[index] + ar[index+1] + ar[index+2]);

        if ((index+2) == (ar.length-1)){
            einde = false;
        }
        index++;
    }


}

window.addEventListener("load",setup);