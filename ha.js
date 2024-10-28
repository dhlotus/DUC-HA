document.addEventListener("keydown", function(event) {
    if (event.key === "F12") {
        event.preventDefault();
    }
});
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});
