(function() {
    const steamPanel = document.querySelector('.steam-card');
    if (steamPanel) {
        steamPanel.style.cursor = 'pointer';
        steamPanel.addEventListener('click', function() {
            alert('Steam page is currently unavailable.');
        });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
})();