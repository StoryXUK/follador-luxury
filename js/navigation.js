 // Function to include navigation from navigation.html
function includeNavigation() {
    if (!document.getElementById('navigation')) return;
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navigation').innerHTML = data;
        })
        .then(() => {
            // After including navigation, include the navigation.js file
            includeNavigationJS();
        });
}

// Function to include navigation.js file
function includeNavigationJS() {
    var script = document.createElement('script');
    script.src = 'navigation.js';
    document.head.appendChild(script);
}

// Preserve the legacy navigation include without overriding other load handlers.
window.addEventListener('load', function () {
    includeNavigation();
});
