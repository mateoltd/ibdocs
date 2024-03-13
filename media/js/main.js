function clearPlaceholder() {
    var input = document.getElementById("searchInput");
    input.onkeydown = function() {
        input.style.color = "white";
        if (input.value == "¿En qué estás pensando?") {
            input.value = "";
        }
    }
}

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".container").classList.add("fade-out");
        
        // Opcional: redirigir o realizar alguna acción después de la animación
        setTimeout(function() {
            // Aquí puedes redirigir al usuario o limpiar el input, por ejemplo
            // window.location.href = "https://www.tusitio.com";
            // document.getElementById("searchInput").value = "";
        }, 1000); // Coincide con la duración de la animación
    }
});

document.getElementById("submitButton").addEventListener("click", function() {
    document.querySelector(".container").classList.add("fade-out");

    // Opcional: redirigir o realizar alguna acción después de la animación
    setTimeout(function() {
        // Aquí puedes redirigir al usuario o limpiar el input, por ejemplo
        // window.location.href = "https://www.tusitio.com";
        // document.getElementById("searchInput").value = "";
    }, 1000); // Coincide con la duración de la animación
});