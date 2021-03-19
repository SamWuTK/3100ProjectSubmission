const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const username = param.get('username');
const pw = param.get('pw');

message.innerHTML = 'Sign up completed !';
