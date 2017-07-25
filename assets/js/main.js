// Estoy añadiendo elementos a mi lista desde HTML
// var miLista = document.getElementsByTagName("li");

var arrLista = [
  {
    title: "delectus aut autem"
  },
  {
    title: "quis ut nam facilis et officia qui"
  },
  {
    title: "fugiat veniam minus"
  },
  {
    title: "et porro tempora"
  },
  {
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum"
  },
  {
    title: "qui ullam ratione quibusdam voluptatem quia omnis"
  },
  {
    title: "illo expedita consequatur quia in"
  },
  {
    title: "quo adipisci enim quam ut ab"
  },
  {
    title: "molestiae perspiciatis ipsa"
  },
  {
    title: "illo est ratione doloremque quia maiores aut"
  }
];
for (var i = 0; i < miArrLista.length; i++) {
  var tareas = document.getElementById("li");
  var _tarea += arrLista[i].title // error
   
  tareas.innerHTML = _tarea;
}
// var i;
// for (i = 0; i < miLista.length; i++) {
//   var span = document.createElement("span");
//   var texto = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(texto);
//   miLista[i].appendChild(span);
// }

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function nuevaTarea() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Tienes que agregar alguna tarea!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var texto = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(texto);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
