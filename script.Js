const pantalla = document.getElementById("pantalla");
const boton = document.getElementById("boton");
const flash = document.getElementById("flash");

// Simulación de eventos hacker
const eventos = [
    "[*] Conectando al servidor remoto...",
    "[*] Estableciendo túnel seguro...",
    "[*] Escaneando sistema...",
    "[*] Localizando archivos sensibles...",
    "[*] Descargando contactos...",
    "[*] Obteniendo fotos y vídeos...",
    "[!] ALERTA: ACCESO NO AUTORIZADO DETECTADO",
    "[*] Robo de Información en progreso...",
    "[!] ⚠️ ROBANDO INFORMACIÓN ⚠️",
    "[*] Enviando datos a la nube..."
    "[*] Recopilando.......Trabaja en El Liceo Catolico Cristo Rey"
    "[!] Puesto de Consejera..."
    "[!] Anteriormente de Profesora de la asignatura Formación Cristiana..."
    "[!] Casada con hijos...y uno de ellos de nombre Oscar"
];

let i = 0;

function escribirEvento() {
    if (i < eventos.length) {
        pantalla.innerHTML += eventos[i] + "\n";
        pantalla.scrollTop = pantalla.scrollHeight; // Auto scroll

        // Flash si detecta la línea de "ROBANDO INFORMACIÓN"
        if(eventos[i].includes("ROBANDO INFORMACIÓN")){
            flash.style.opacity = 1;
            setTimeout(() => { flash.style.opacity = 0; }, 100); // Flash breve
        }

        i++;
        setTimeout(escribirEvento, Math.random() * 800 + 400); // Velocidad variable
    } else {
        // Animación de cuenta regresiva falsa
        let count = 5;
        const countdown = setInterval(() => {
            pantalla.innerHTML += `\n[!] Eliminando rastros en ${count} segundos...`;
            pantalla.scrollTop = pantalla.scrollHeight;
            count--;
            if(count < 0){
                clearInterval(countdown);
                pantalla.innerHTML += "\n\n[✅] Proceso detenido.";
                boton.style.display = "block";
            }
        }, 1000);
    }
}

setTimeout(escribirEvento, 500);

// Acción del botón de broma
boton.addEventListener("click", () => {
    pantalla.innerHTML = "😈😈😈😈 Tranquila guapa...\n\nSi quiere que no se comparta tu informacion.\n\nTienes que ofrecernos algo.\n\nTu información no esta segura.";
    boton.style.display = "none";
});
