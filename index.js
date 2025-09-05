const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

const miLista = document.querySelector(".lista");

function crearLista() {
  miLista.innerHTML = "";

  cosasQueAprendimos.forEach((cosa) => {
    const li = document.createElement("li");
    li.textContent = cosa.tema;

    if (cosa.class && cosa.class !== "special") {
      li.classList.add(cosa.class);
    }

    miLista.appendChild(li);
  });
}

function eliminarLista() {
  setTimeout(() => {
    miLista.innerHTML = "";

    setTimeout(() => {
      crearLista();
    }, 3000);
  }, 5000);
}

function main() {
  eliminarLista();
}

main();
