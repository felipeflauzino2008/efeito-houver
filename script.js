// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll('.menu-item a');

menuItems.forEach(item => {
    // Efeito de som opcional ao passar o mouse (requer arquivo de áudio)
    item.addEventListener('mouseenter', () => {
        console.log(`Hovering over: ${item.getAttribute('data-text')}`);
    });

    // Garante que o foco via teclado também dispare a animação
    item.addEventListener('focus', () => {
        item.style.transform = 'scale(1.1) translateX(20px)';
    });

    item.addEventListener('blur', () => {
        item.style.transform = 'scale(1) translateX(0)';
    });
});

/* Dica de UX: Como o design é minimalista, o foco foi em 
   CSS Transitions por serem processadas pela GPU, 
   garantindo os 60fps da animação.
*/