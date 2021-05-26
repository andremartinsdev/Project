import jsPDF from "jspdf";
import moldura from '../../../assets/moldura.png'


function gerarPdfAniversariante(data) {
    console.log(data)
    var doc = new jsPDF();
    var linha = 65;

    doc.text("Aniversariantes", 105, 40, null, null, "center");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 255).text("Nome do Paciente", 25, linha, null, null).setTextColor(0);
    doc.setTextColor(0, 0, 255).text("Data de Nascimento", 80, linha, null, null).setTextColor(0);
    doc.setTextColor(0, 0, 255).text("Telefone", 138, linha, null, null).setTextColor(0);
    data.forEach(element => {
        doc.text(element.nomePaciente, 35, linha + 8, null, null);
        doc.text(element.dataNascimento, 85, linha + 8, null, null);
        doc.text(element.telefone, 138, linha + 8, null, null);
        linha = linha + 8
    });
    doc.setFont("times", "italic");
    doc.text("Rua Geraldo Rodrigues Cunha, 162, Centro, Viçosa-MG", 80, 240);

    doc.addImage(moldura, "JPEG", 0, 230, 230, 70);
    doc.addImage(moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
    window.open(doc.output("bloburl"));
}


export default {
    gerarPdfAniversariante
}