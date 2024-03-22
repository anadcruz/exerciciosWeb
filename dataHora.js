function displayDate() {

    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();


    var horaFormatada = hora + ":" + minutos ;

    var horaDisplay = document.getElementById("horaDisplay");
    horaDisplay.textContent = "Hora atual: " + horaFormatada;
}
function showAlert() {
    alert("Olá!");
}
