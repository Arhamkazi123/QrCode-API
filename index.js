function qrcode() {
    let iv = document.querySelector('#inp').value;
    let imgcon = document.querySelector('.image12');
    imgcon.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${iv}" alt="cannot generate">`;
}