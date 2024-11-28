document.querySelectorAll('.text-container').forEach(container => {
    const toggleButton = container.querySelector('.toggle-text');
    const shortText = container.querySelector('.short-text');
    const fullText = container.querySelector('.full-text');

    toggleButton.addEventListener('click', () => {
        if (fullText.style.display === 'none') {
            fullText.style.display = 'block';
            shortText.style.display = 'none';
            toggleButton.textContent = 'Rodyti mažiau';
        } else {
            fullText.style.display = 'none';
            shortText.style.display = 'block';
            toggleButton.textContent = 'Rodyti daugiau';
        }
    });
});