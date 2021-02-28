function validarfecha(texto){
    var reg = new RegExp("^(0?[1-9]|[12][0-9]|3[01])[\\/](0?[1-9]|1[012])[/\\/](19|20)\\d{2}$");
    document.writeln(reg.test(texto));
}

function validarEmail(texto){
    var reg = new RegExp("^([\\w-]+\\.)*?[\\w-]+@[\\w-]+\\.([\\w-]+\\.)*?[\\w]+$");
    document.writeln(reg.test(texto));
}