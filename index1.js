// Elementos del chatbot
const chatbotContainer = document.getElementById('chatbot-container');
const chatbox = document.createElement('div');
chatbox.classList.add('chatbox');
chatbotContainer.appendChild(chatbox);

// Respuestas del chatbot
const respuestas = {
    "Necesito ayuda": "Puedo ayudarte con cualquier pregunta que tengas.",
    "¿Qué necesitas?": "Necesito información específica para proporcionarte la ayuda adecuada.",
    "Quiero aprender lenguaje de señas": '<a href="https://www.youtube.com/watch?v=g1Yxx1PzSjg&ab_channel=Minders">Muy bien hemos encontrado este video espero te sea de mucha utilidad.</a>',
    "Letra A en señas": '<img src="imagenes/letra a.jpg" alt=""> Esa es la letra A ¡Practicala!',
    "Letra B en señas": '<img src="imagenes/letra b.jpg" alt=""> Esa es la letra B ¡Practicala!',
    "Letra C en señas": '<img src="imagenes/letra c.png" alt=""> <br> Esa es la letra C ¡Practicala!',
    "Letra D en señas": '<img src="imagenes/letra d.png" alt=""> <br> Esa es la letra D ¡Practicala!',
    "Letra E en señas": '<img src="imagenes/letra e.png" alt=""> <br> Esa es la letra E ¡Practicala!',
    "Letra F en señas": '<img src="imagenes/letra f.png" alt=""> <br> Esa es la letra F ¡Practicala!',
    "Letra G en señas": '<img src="imagenes/letra g.png" alt=""> <br> Esa es la letra G ¡Practicala!',
    "Letra H en señas": '<img src="imagenes/letra h.png" alt=""> <br> Esa es la letra H ¡Practicala!',
    "Numero 1 en señas": '<img src="imagenes/numero 1.png" alt=""> <br> Este es el numero 1 ¡Practicalo!',
    "Numero 2 en señas": '<img src="imagenes/numero 2.png" alt=""> <br> Este es el numero 2 ¡Practicalo!',
    "Numero 3 en señas": '<img src="imagenes/numero 3.png" alt=""> <br> Este es el numero 3 ¡Practicalo!',
    "Numero 4 en señas": '<img src="imagenes/numero 4.png" alt=""> <br> Este es el numero 4 ¡Practicalo!',
    "Numero 5 en señas": '<img src="imagenes/numero 5.png" alt=""> <br> Este es el numero 5 ¡Practicalo!',
    "Que opciones laborales puedo tener": '<a href="https://www.capacitacioninclusiva.com/trabajos-en-los-que-pueden-formarse-personas-con-discapacidad"> Hemos realizado una busqueda y aca hay muchos empleos a los cuales puedes optar',
};

// Función para agregar un mensaje al chat
function agregarMensaje(usuario, mensaje) {
    const mensajeElement = document.createElement('div');
    mensajeElement.classList.add('mensaje', usuario);
    mensajeElement.innerHTML = `<strong>${usuario}:</strong> ${mensaje}`;
    chatbox.appendChild(mensajeElement);
}

// Función para que el chatbot responda
function responder(mensaje) {
    const respuesta = respuestas[mensaje];
    agregarMensaje('Chatbot', respuesta);
}

// Evento para manejar los mensajes del usuario
function manejarMensajeUsuario(mensajeUsuario) {
    agregarMensaje('Usuario', mensajeUsuario);
    responder(mensajeUsuario);
}

// Mensaje de bienvenida
agregarMensaje('Chatbot', '¡Hola! ¿En qué puedo ayudarte?'); 

// Capturar entrada del usuario
const inputUsuario = document.createElement('input');
inputUsuario.placeholder = 'Escribe tu pregunta...';
inputUsuario.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const mensajeUsuario = inputUsuario.value;
        manejarMensajeUsuario(mensajeUsuario);
        inputUsuario.value = '';
    }
});
chatbotContainer.appendChild(inputUsuario);

// Evento para limpiar el chat
const botonLimpiar = document.getElementById('limpiar-chat');
botonLimpiar.addEventListener('click', () => {
    chatbox.innerHTML = ''; // Borra el contenido del chatbox
});




