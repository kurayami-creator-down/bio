// Управление музыкой
const musicBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i>';
        musicBtn.classList.remove('playing');
    } else {
        bgMusic.play().catch(e => console.log('Автовоспроизведение заблокировано'));
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Эффект параллакса для аватара при движении мыши
document.addEventListener('mousemove', (e) => {
    const avatar = document.querySelector('.avatar-wrapper');
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    avatar.style.transform = `translate(${x}px, ${y}px)`;
});

// Плавное появление ссылок
window.addEventListener('load', () => {
    const links = document.querySelectorAll('.link-item');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
