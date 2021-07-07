import moldura from "../assets/moldura.png";
import {publicPath} from '../../vue.config'


export default function rodape(doc,dadosClinica, uuidClinica){

    doc.setFont("times", "italic");
    doc.text(`${dadosClinica[0].nomeClinica},`, 77, 270);
    doc.text(
      `${dadosClinica[0].endereco}, ${dadosClinica[0].numero},  ${dadosClinica[0].bairro},  ${dadosClinica[0].cidade},`,
      47,
      277
    );
    doc.text(`Telefone :  ${dadosClinica[0].telefone},`, 47, 285);
    doc.text(`CEP : ${dadosClinica[0].cep}`, 97, 285);

    doc.addImage(
      `${publicPath}/Clinica/image/logo/${uuidClinica}`,
      "JPEG",
      3,
      270,
      40,
      20
    );
    doc.addImage(moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
    doc.addImage(moldura, "JPEG", 0, 248, 230, 70);
}
