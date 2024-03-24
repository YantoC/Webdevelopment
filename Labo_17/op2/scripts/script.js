const setup = () => {
        const liElementen = document.querySelectorAll("li");

        for (let i = 0; i < liElementen.length; i++){
            liElementen[i].setAttribute("class", "listitem");

        }

        const nieuweFoto = document.createElement("img");
        nieuweFoto.setAttribute("src", "./Images/nerd1.png");
        nieuweFoto.setAttribute("class", "me");
        document.body.appendChild(nieuweFoto);
    }
    window.addEventListener("load", setup);
