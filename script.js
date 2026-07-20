const languageButtons = document.querySelectorAll('[data-language]');
let currentLanguage = 'tr';

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentLanguage = button.dataset.language;
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll(`[data-${currentLanguage}]`).forEach((element) => {
      element.textContent = element.dataset[currentLanguage];
    });
    languageButtons.forEach((languageButton) => {
      languageButton.classList.toggle('active', languageButton.dataset.language === currentLanguage);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
