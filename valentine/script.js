document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.getElementById("heart-container");

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("img");
        heart.classList.add("heart");
        heart.src = "./assets/heart.png"

        // Random width between 20px and 80px
        const width = Math.random() * 50 + 20; // 20px to 60px
        heart.style.width = `${width}px`;
        heart.style.height = "auto"; // Keeps aspect ratio

        // Randomize position, size, opacity, and animation delay
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.opacity = Math.random() * 0.75 + 0.4;
        heart.style.animationDelay = Math.random() * 5 + "s";

        heartContainer.appendChild(heart)
    }

    
})

document.addEventListener("DOMContentLoaded", () => {


    const loves = document.querySelector('#love');
    loves.addEventListener('click', () => {
        navigator.clipboard.writeText('🍿');
        const love = document.createElement('div');
        const emojis = ['🍿', '💥', '🔥', '😹', '🥵', '🥶', '🤘', '🚀', '🗿']
        love.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
        const x = Math.floor(Math.random() * 100) - 50;
        love.classList.add('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'text-4xl', 'duration-[3s]', 'select-none', 'pointer-events-none');
        loves.appendChild(love);
        setTimeout(() => {
            love.style.translate = `${x}vw 0`;
            love.classList.add('-translate-y-[100vh]', 'opacity-0', `rotate-[${7.2 * x}deg]`, 'scale=[5]');
        }, 0);
        setTimeout(() => {
            love.classList.add('blur-md');
        }, 1000)
        setTimeout(() => {
            love.remove();
        }, 5000)

        const audio = document.getElementById('background-audio');
        audio.play();  // Starts the audio
    });    

    new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})



