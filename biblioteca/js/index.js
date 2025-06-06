let libros = [];

document.getElementById("frmLibro").addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("txtTitulo").value.trim();
  const autor = document.getElementById("txtAutor").value.trim();
  const editorial = document.getElementById("txtEditorial").value.trim();
  const idioma = document.getElementById("cbIdioma").value;

  if (!titulo || !autor || !editorial || !idioma) {
    alert("Todos los campos son obligatorios");
    return;
  }

  libros.push({ titulo, autor, editorial, idioma });
  mostrarLibros();
  this.reset();
});

function mostrarLibros(lista = libros) {
  const tbody = document.getElementById("tablaLibros");
  tbody.innerHTML = "";

  lista.forEach((libro, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${libro.titulo}</td>
      <td>${libro.autor}</td>
      <td>${libro.editorial}</td>
      <td>${libro.idioma}</td>
      <td><button class="btn btn-danger btn-sm" onclick="eliminarLibro(${index})">Eliminar</button></td>
    `;
    tbody.appendChild(fila);
  });
}

function eliminarLibro(index) {
  if (confirm("¿Estás segura de eliminar este libro?")) {
    libros.splice(index, 1);
    mostrarLibros();
  }
}

function consultarLibro() {
  const filtro = document.getElementById("txtBuscar").value.trim().toLowerCase();
  const resultados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(filtro)
  );
  mostrarLibros(resultados);
}