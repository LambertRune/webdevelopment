function handleKeydown(event, element) {
    // If the content is '0', remove it when the user starts typing
    if (element.textContent.trim() === '0') {
        element.textContent = '';
    }
}
function herbereken() {
    var prijs1 = parseFloat(document.getElementById("prijs1Value").textContent) || 0;
    var aantal1 = parseFloat(document.getElementById("aantal1Value").textContent) || 0;
    var btw1 = parseFloat(document.getElementById("btw1Value").textContent) || 0;

    var subtotaal1 = prijs1 * aantal1 * (btw1/100+1);
    document.getElementById("subtotaal1Value").textContent = subtotaal1.toFixed(2);

    var prijs2 = parseFloat(document.getElementById("prijs2Value").textContent) || 0;
    var aantal2 = parseFloat(document.getElementById("aantal2Value").textContent) || 0;
    var btw2 = parseFloat(document.getElementById("btw2Value").textContent) || 0;

    var subtotaal2 = prijs2 * aantal2 * (1 + btw2);
    document.getElementById("subtotaal2Value").textContent = subtotaal2.toFixed(2);

    var prijs3 = parseFloat(document.getElementById("prijs3Value").textContent) || 0;
    var aantal3 = parseFloat(document.getElementById("aantal3Value").textContent) || 0;
    var btw3 = parseFloat(document.getElementById("btw3Value").textContent) || 0;

    var subtotaal3 = prijs3 * aantal3 * (1 + btw3);
    document.getElementById("subtotaal3Value").textContent = subtotaal3.toFixed(2);

    var totaal = subtotaal1+subtotaal2+subtotaal3;
    document.getElementById("totaal")
}