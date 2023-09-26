// Elementos del chatbot
const chatbotContainer = document.getElementById('chatbot-container');
const chatbox = document.createElement('div');
chatbox.classList.add('chatbox');
chatbotContainer.appendChild(chatbox);

// Respuestas del chatbot
const respuestas = {
    "¿Cómo te puedo ayudar?": "Puedo ayudarte con cualquier pregunta que tengas.",
    "¿Qué necesitas?": "Necesito información específica para proporcionarte la ayuda adecuada.",
    "Puedes ver mucha más información accediendo aquí": '<a href="https://www.ejemplo.com">Aquí está el enlace a más información.</a>'
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



