// Mi lista (arreglo) desde js a html
var miLista = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  }
];

lista = document.getElementById("miUl");
str = "<ul>";
for (var i = 0; i < miLista.length; i++) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.className = "close";
  span.textContent = miLista[i].title;
  lista.appendChild(li);

  if (miLista[i].completed == true) {
    str +=
      "<li > " +
      miLista[i].title +
      "<span class='close'>" +
      "x" +
      " </span></li>";
  }
}
str += "</ul>";
lista.innerHTML = str;

// borrar tarea realizada
var borrar = document.getElementsByClassName("close");
for (var i = 0; i < borrar.length; i++) {
  borrar[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Crear nueva lista y añadir con el botón
function nuevaTarea() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var tarea = document.createTextNode(inputValue);
  li.appendChild(tarea);
  miLista.push(tarea);
  if (inputValue === "") {
    alert("Agrega alguna tarea!");
  } else {
    document.getElementById("miUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var texto = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(texto);
  li.appendChild(span);

  for (var i = 0; i < borrar.length; i++) {
    borrar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
// para tachar con un click
var tachar = document.querySelector("ul");
tachar.addEventListener(
  "click",
  function(cross) {
    if (cross.target.tagName === "LI") {
      cross.target.classList.toggle("checked");
    }
  },
  false
);
