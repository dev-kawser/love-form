const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love you Too! 💖';
    question.style.color = '#ff69b4'; // Change color to pink
    question.style.animation = 'fadeIn 1s ease-in-out'; // Add fade-in animation
});

// Make the "No" button bounce around when hovered
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = `${i}px`;
    noBtn.style.top = `${j}px`;
});