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
    "Letra B en señas": '<img src="imagenes/letra b.jpg" alt=""> Esa es la letra B ¡Practicala!'
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




