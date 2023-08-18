ScrollReveal().reveal(".about .container",{delay:1,opacity:0,distance: '50px',reset: true})
ScrollReveal().reveal(".services .flex",{delay:1,opacity:0,distance: '50px',reset: true})



let menu  = document.getElementById("menu")
let navlist = document.getElementById("nav-list")

menu.addEventListener("click",()=>{
    navlist.classList.toggle("active")
})

const translations = {
    en: {
        welcome: "Welcome To Reflection",
        isQuality: "Reflection is a quality of you",
        // ... add more translations
    },
    ar: {
        welcome: "مرحبًا بك في ريفليكشن",
        isQuality: "الانعكاس هو جودة تتميز بها",
        // ... add more translations
    }
    // ... add translations for more languages
};

function updateContent(language) {
    const elements = document.querySelectorAll('[data-translation-key]');
    
    elements.forEach(element => {
        const translationKey = element.getAttribute('data-translation-key');
        if (translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });
}

let currentLanguage = 'en'; // Default language

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'ar' : 'en';
    updateContent(currentLanguage);
}

// Call initial translation
updateContent(currentLanguage);