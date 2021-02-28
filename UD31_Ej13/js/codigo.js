let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#tabla1");
  x.click(presionParrafoDocumento);
  x = $("#tabla2");
  x.click(presionParrafoSegundaTabla);
}

function presionParrafoDocumento() {
  alert('se presionó un párrafo del documento');
}

function presionParrafoSegundaTabla() {
  alert('se presionó un párrafo contenido en la segunda tabla.');
}