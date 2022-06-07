function media(){
    var nota1B1 = parseFloat(document.getElementById("nota1B1").value);
    var nota2B1 = parseFloat(document.getElementById("nota2B1").value);
    var nota3B1 = parseFloat(document.getElementById("nota3B1").value);

    var media = (nota1B1 + nota2B1 + nota3B1)/3;
    var div = document.getElementById("resultado");

    var aulas = parseFloat(document.getElementById("aulas").value);
    var faltas = parseFloat(document.getElementById("faltas").value);
    var freq = ((aulas - faltas) / aulas) * 100;

    if(media >= 7 && freq >= 75) {
        div.innerHTML += "<p><b>Situação:</b> Aprovado</p>"
    }
        else if (freq <75) {
            div.innerHTML += "<p><b>Situação:</b> Reprovado</p>"
        } 
            else if (media <7 && freq >= 75) {
                div.innerHTML += "<p><b>Situação:</b> Exame</p>"
            } 
            
    }


