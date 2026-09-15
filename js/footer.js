(function () {
    function loadFooter() {
        var placeholder = document.getElementById('footer');
        if (!placeholder) return;

        var script = document.querySelector('script[src$="js/footer.js"]');
        var footerUrl = script
            ? new URL('../footer.html', script.src)
            : new URL('footer.html', window.location.href);

        fetch(footerUrl)
            .then(function (response) {
                if (!response.ok) throw new Error('Failed to load footer.html');
                return response.text();
            })
            .then(function (html) {
                placeholder.outerHTML = html;
            })
            .catch(function (err) {
                console.error('Footer load error:', err);
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadFooter);
    } else {
        loadFooter();
    }
}());
