function calculateStickers() {
    const sticker1 = Number(document.querySelector('#sticker1').value);
    const sticker2 = Number(document.querySelector('#sticker2').value);
    const sticker3 = Number(document.querySelector('#sticker3').value);

    const totalMemes = sticker1 + sticker2 + sticker3;
    const result = document.querySelector('#resultado');

    if (totalMemes === 1) {
        resultado.textContent = `Llevas 1 Meme`;
    } else if (totalMemes > 1 && totalMemes <= 10) {
        resultado.textContent = `Llevas ${totalMemes} memes`;
    } else {
        resultado.textContent = 'Llevas demasiados memes';
    }
}
