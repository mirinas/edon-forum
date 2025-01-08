

getMessages();

setInterval(getMessages, 5000);


function getMessages() {
    let server = 'https://script.google.com/macros/s/AKfycbwP_kh4FP23dYoqcGS8Pkgq_s7Oc4LocyBapNoteIPp8Rr-X2VP4pD9oea2CqQKWKJ5Ew/exec';
    $.get(server, processMessages)
}


function sendMessage() {
    let server = 'https://script.google.com/macros/s/AKfycbwP_kh4FP23dYoqcGS8Pkgq_s7Oc4LocyBapNoteIPp8Rr-X2VP4pD9oea2CqQKWKJ5Ew/exec';
    let form = document.querySelector('#message-form');
    let data = new FormData(form);
    $.ajax({
        url: server,
        type: 'POST',
        data: data,
        processData: false,
        contentType: false
    });
    form.reset();
}


function processMessages(response) {
    let messages = JSON.parse(response);

    let main = document.querySelector('main');
    main.innerHTML = '';

    let template = document.querySelector('#message-template').innerHTML;

    for(let msg of messages) {
        main.innerHTML += template.replace('{{user}}', msg.user)
        .replace('{{content}}', msg.content)
        .replace('{{link}}', msg.link)
    }
}