function changeColor() {
    const h2Element = document.getElementById('important-h2-element');
    if (h2Element.style.color === "red") {
        h2Element.style.color = 'black';
        h2Element.style.fontSize = '14px';

    } else {
        h2Element.style.color = 'red';
        h2Element.style.fontSize = '45px';

    }
}