function verificarPassword() {
    var digit1 = document.querySelector('#digito1').value;
    var digit2 = document.querySelector('#digito2').value;
    var digit3 = document.querySelector('#digito3').value;
    
    var password = digit1 + digit2 + digit3;
    var result = document.querySelector('#resultado');
    
    if (password === '911') {
        result.textContent = 'password 1 correcto';
    } else if (password === '714') {
        result.textContent = 'password 2 correcto';
    } else {
        result.textContent = 'password incorrecto';
    }
}