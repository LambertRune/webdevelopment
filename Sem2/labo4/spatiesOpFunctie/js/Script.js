function maakMetSpaties() {
    const invoerText = document.getElementById("invoer").value;
    document.getElementById("uitvoer").innerText = invoerText.split("").join(" ");
}
