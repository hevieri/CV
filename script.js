// script.js

// script.js

// Función para mostrar las habilidades al hacer scroll
const skillsSection = document.getElementById('habilidades');
const skillsImages = document.querySelectorAll('.skills');

window.addEventListener('scroll', () => {
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    // Mostrar las imágenes de habilidades cuando el usuario hace scroll hacia la sección
    if (sectionPosition < screenPosition) {
        skillsImages.forEach((skill) => {
            skill.classList.add('visible');
            skill.style.opacity = 1; // Asegúrate de que se muestre
        });
    }

    // Efecto parallax en las imágenes
    skillsImages.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const offset = (window.scrollY - skillPosition) * 0.2; // Multiplicamos para controlar la velocidad

        skill.style.transform = `translateY(${offset}px)`; // Mover la imagen en el eje Y
    });
});

//TRANSICION SKILLBAR

const animateSkillBar = (skill, percentage) => {
    let currentPercentage = 0;
    const increment = 1;
    const barFill = skill.querySelector(".skill-bar-fill");
    const percentageElement = skill.querySelector(".skill-percentage");

    const updateSkill = () => {
        if (currentPercentage < percentage) {
            currentPercentage += increment;
            percentageElement.textContent = `${currentPercentage}%`;
            barFill.style.width = `${currentPercentage}%`;
            requestAnimationFrame(updateSkill);
        }
    };

    requestAnimationFrame(updateSkill);
};

document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        const percentageElement = skill.querySelector(".skill-percentage");
        const percentage = parseInt(percentageElement.dataset.percentage, 10);
        animateSkillBar(skill, percentage);
    });
});


//titulo cayendo//

document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".cae");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Deja de observar el elemento
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    elementos.forEach(el => observer.observe(el));
});



// titulaciones//
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentSlide = 0;

nextButton.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentSlide = (currentSlide + 1) % totalItems;
    track.style.transform = `translateX(-${currentSlide * 300}px)`;
});

prevButton.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    currentSlide = (currentSlide - 1 + totalItems) % totalItems;
    track.style.transform = `translateX(-${currentSlide * 300}px)`;
});
