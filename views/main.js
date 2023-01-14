const socket = io();
const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const nameBlock = document.querySelector('.name');

const userName = prompt('Your Name');
nameBlock.innerHTML = userName;

form.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', { 
            messages: input.value, 
            name: userName 
        });
    }
    input.value = '';
});

socket.on('chat message', (data)=>{
    const item = document.createElement('li');
    item.innerHTML = `<san>${data.name}</span> : ${data.messages}`;
    messages.appendChild(item);
});