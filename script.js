document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const app = icon.getAttribute('data-app');
        alert(`Opening ${app}...`);
        // You can replace this with actual app functionality
    });
});
