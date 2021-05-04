const a = `
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Atestado Médico (APM)</title>
<style type="text/css">
.texto {
font-family: "Calibri", serif;
font-weight: bold;
font-size: 12pt;
text-transform: uppercase;
color: #000000;
border: 1px;
background-color: #EDEDED
}
.texto2 {
font-family: "Calibri", serif;
font-weight: bold;
font-size: 12pt;
color: #000000;
border: 1px;
}
.texto3 {
font-family: "Calibri", serif;
font-weight: bold;
font-size: 10pt;
color: #000000;
border: 1px;
background-color: #EDEDED
}
</style>
</head>

<body>
<p align="center"><img src="cabeçalho atestado pb - SEM UNIMED.png" align="center" width="600"></p>
<p align="center"><font size="+2" face="Calibri";>ATESTADO
MÉDICO</font></p>
<hr>
<table width="100%" cellpadding="1" cellspacing="1">
<tr>
<td width="65%"><div><font size="2" face="Calibri";>O(A) SR.(A):
<input type="text" name="nome" size="55" class="texto" value="Nome do paciente">
<br>
COMPARECEU A ESTA CLÍNICA PARA:</font><br>
<input type="checkbox" id="checkbox1" checked>
<label for="checkbox1"><font face="Calibri" size="2">CONSULTA</font></label>
<br><input type="checkbox" id="checkbox2">
<label for="checkbox2"><font face="Calibri" size="2">ACOMPANHAR FAMÍLIA:</font>
<input type="text" class="texto3" name="nome" size="40" value="Filho (a) menor de idade">
</label></div></td>
</tr>
</table>
<hr>
<font face="Calibri"><strong>PORTANTO, COMUNICAMOS QUE:</strong></font>
<table width="100%" cellpadding="1" cellspacing="1">
<tr>
<td valign="top" width="65%"><font face="Calibri" size="2">
<div>
<input type="checkbox" id="checkbox10">
<label for="checkbox10">Nada apresenta que o impossibilite ao
<input type="text" name="nome" size="25" class="texto3" value="trabalho/escola/creche">
</label>
</div>
<div>
<input type="checkbox" id="checkbox11">
<label for="checkbox11">Deverá permanecer em repouso no horário:</label>
<input type="text" name="nome" size="12" class="texto3" value="00:00 a 00:00h">
</div>
<div>
<input type="checkbox" id="checkbox12">
<label for="checkbox12">Deverá permanecer em repouso no período da <b>MANHÃ</b></label>
</div>
<div>
<input type="checkbox" id="checkbox13">
<label for="checkbox13">Deverá permanecer em repouso no período da <b>TARDE</b></label>
</div>
<div>
<input type="checkbox" id="checkbox14">
<label for="checkbox14">Deverá permanecer em repouso no dia de hoje</label>
</div>
<div>
<input type="checkbox" id="checkbox15">
<label for="checkbox15">Deverá permanecer em repouso no período de
<input type="text" class="texto" name="nome" size="10" value="-- dias">
</label>
</div>
</font>
<hr>
<font face="Calibri" size="-1">AUTORIZO O MÉDICO ASSISTENTE A REGISTRAR O CID NESTE RELATÓRIO DE ATENDIMENTO MÉDICO.<br>
<br>
Assinatura: __________________________________________<br>
</font> <font face="Calibri">CID:
<input type="text" class="texto" name="nome" size="20" value="Z00.1 // Z76.3">
</font></td>
<td valign="top"><font face="Calibri";>
<table width="200" cellspacing="0" cellpadding="0" border="1">
<tr>
<td valign="bottom" height="150" align="center"><font size="-2">CARIMBO MÉDICO COM CRM</font></td>
</tr>
</table>
</font></td>
</tr>
</table>
<p align="right">
<input type="text" name="nome" size="43" class="texto3" value="OBSERVAÇÃO:">
<br>
<input type="text" name="nome" size="43" class="texto3" value="Data/hora da emissão:">
<br>
<font face="Calibri" size="-1"><SCRIPT LANGUAGE="JAVASCRIPT">
<!--

var now = new Date();
var mName = now.getMonth() +1 ;
var dName = now.getDay() +1;
var dayNr = now.getDate();
var yearNr=now.getYear();
if(dName==1) {Day = "Domingo";}
if(dName==2) {Day = "Segunda-feira";}
if(dName==3) {Day = "Terça-feira";}
if(dName==4) {Day = "Quarta-feira";}
if(dName==5) {Day = "Quinta-feira";}
if(dName==6) {Day = "Sexta-feira";}
if(dName==7) {Day = "Sábado";}
if(mName==1){Month = "Janeiro";}
if(mName==2){Month = "Fevereiro";}
if(mName==3){Month = "Março";}
if(mName==4){Month = "Abril";}
if(mName==5){Month = "Maio";}
if(mName==6){Month = "Junho";}
if(mName==7){Month = "Julho";}
if(mName==8){Month = "Agosto";}
if(mName==9){Month = "Setembro";}
if(mName==10){Month = "Outubro";}
if(mName==11){Month = "Novembro";}
if(mName==12){Month = "Dezembro";}
if(yearNr < 2000) {Year = 1900 + yearNr;}
else {Year = yearNr;}
var todaysDate =(" " + Day + ", " + dayNr + " de " + Month + " de " + Year);

document.write('' ''+todaysDate);

//-->
</SCRIPT>
às <SPAN ID="Clock">00:00</SPAN>h
<SCRIPT LANGUAGE="JavaScript">
<!--
var Elem = document.getElementById("Clock");
function Horario(){
var Hoje = new Date();
var Horas = Hoje.getHours();
if(Horas < 10){
Horas = "0"+Horas;
}
var Minutos = Hoje.getMinutes();
if(Minutos < 10){
Minutos = "0"+Minutos;
}
var Segundos = Hoje.getSeconds();
if(Segundos < 10){
Segundos = "0"+Segundos;
}
Elem.innerHTML = Horas+":"+Minutos;
}
window.setInterval("Horario()",1000);
//-->
</SCRIPT></font></p>
<hr>
<font face="Calibri" size="2"><b>LOCAL DO ATENDIMENTO:</b></font> <font face="Calibri" size="1">
<div>
<label for="checkbox18"><b>Clínica Campinas:</b> Av. Guilherme de Campos, 500, Pq. Dom Pedro Shopping – (Ent. Colinas) – Campinas/SP – 19 3708 9900</label>
</div>
</font>
<hr>
</body>
</html>`

export default a;