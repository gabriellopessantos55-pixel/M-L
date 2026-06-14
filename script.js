// Animação suave dos cards ao rolar a página

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");

        }

    });

}, {

    threshold: 0.2

});


document.querySelectorAll(".card").forEach((card) => {

    card.classList.add("escondido");

    observer.observe(card);

});


// Efeito de aparecer nas imagens da galeria

document.querySelectorAll(".galeria img").forEach((imagem) => {

    imagem.classList.add("escondido");

    observer.observe(imagem);

});


// Botão voltar ao topo

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.classList.add("topo");

document.body.appendChild(botaoTopo);

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.style.opacity = "1";

    }

    else {

        botaoTopo.style.opacity = "0";

    }

});