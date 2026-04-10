document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load navigation.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("site-nav").innerHTML = data;
        })
        .catch(error => {
            console.error("Navigation load error:", error);
        });
});