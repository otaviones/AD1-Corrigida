var textArea = document.querySelector('textarea')

textArea.addEventListener('input', function(){
    let caracterMax = textArea.maxLength;
    let digitando = textArea.value.length;
    let h3 = document.querySelector('h3').innerText = (caracterMax - digitando)

    if (digitando != 9 ) {
        alert("Precisa de 8 digitos!")
    }
})


