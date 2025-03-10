document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    // Function to load a page
    const loadPage = (page) => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(err => console.error('Failed to load page: ', err));
    };

    // Load the 'about.html' content on initial load
    loadPage('subdomains\\about.html');

    // Add event listeners for navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });
});

