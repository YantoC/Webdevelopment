let personen=[
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex === -1) {
        // Nieuwe persoon toevoegen
        const nieuwePersoon = {
            voornaam: document.getElementById("txtVoornaam").value.trim(),
            familienaam: document.getElementById("txtFamilienaam").value.trim(),
            geboorteDatum:  document.getElementById("txtGeboorteDatum").value.trim(),
            email: document.getElementById("txtEmail").value.trim(),
            aantalKinderen: document.getElementById("txtAantalKinderen").value.trim(),
        };
        personen.push(nieuwePersoon);
        console.log(personen)
    } else {
        // Bestaande persoon bewerken
        personen[selectedIndex].voornaam = document.getElementById("txtVoornaam").value;
        personen[selectedIndex].familienaam = document.getElementById("txtFamilienaam").value;
        personen[selectedIndex].geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        personen[selectedIndex].email = document.getElementById("txtEmail").value;
        personen[selectedIndex].aantalKinderen = document.getElementById("txtAantalKinderen").value;
    }

    updateLijstPersonen();
    resetFormulier();

    // indien ok, bewaar de ingegeven data. NOG DOEN
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    resetFormulier();
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};
const resetFormulier = () =>{
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
}
const updateLijstPersonen = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    const nieuweOptie = document.createElement("option");
    nieuweOptie.value = (personen.length - 1).toString();
    nieuweOptie.textContent = personen[personen.length - 1].voornaam + " " + personen[personen.length - 1].familienaam;
    lstPersonen.appendChild(nieuweOptie);
};
const selecteerNieuwPersoon = () => {
    console.log("Klik op nieuwpersoon");

    //nog de juiste persoon kunne pakken
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex !== -1) {
        const geselecteerdePersoon = personen[selectedIndex];
        document.getElementById("txtVoornaam").value = geselecteerdePersoon.voornaam;
        document.getElementById("txtFamilienaam").value = geselecteerdePersoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = geselecteerdePersoon.geboorteDatum;
        document.getElementById("txtEmail").value = geselecteerdePersoon.email;
        document.getElementById("txtAantalKinderen").value = geselecteerdePersoon.aantalKinderen;
    }
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    lstPersonen.addEventListener("change", selecteerNieuwPersoon)
    // moet de data van die persoon getoond worden in het formulier
    for (let i = 0; i < personen.length; i++) {
        lstPersonen.innerHTML += "<option value=\"" +  personen[i].voornaam + personen[i].familienaam + "\">" + personen[i].voornaam + " " + personen[i].familienaam + "</option>"
    }
};

window.addEventListener("load", setup);