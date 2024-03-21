document.addEventListener('DOMContentLoaded', function() {
    const emojis = ["❤️", "💖", "💕", "💓", "💗"];
    const content = document.getElementById('content');
    
    setInterval(function() {
        createHeart();
    }, 1000); // Cria um novo coração a cada segundo

    function createHeart() {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const heart = document.createElement('div');
        heart.textContent = emoji;
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        content.appendChild(heart);

        // Adiciona animação de queda
        setTimeout(function() {
            heart.style.top = window.innerHeight + 'px'; // Define o ponto final da animação
            heart.style.opacity = '0'; // Torna o coração transparente durante a queda
        }, 0); // Inicia a animação imediatamente

        // Remove o coração após a animação terminar
        setTimeout(function() {
            heart.remove();
        }, 5000); // Tempo de duração da animação (5 segundos)
    }
});
