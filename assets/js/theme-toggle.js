// Theme Toggle Logic
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Icons (Simple SVGs)
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

// Function to set theme
function setTheme(theme) {
    if (theme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.innerHTML = moonIcon; // Show moon in light mode (to switch to dark)
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.removeAttribute('data-theme');
        themeIcon.innerHTML = sunIcon; // Show sun in dark mode (to switch to light)
        localStorage.setItem('theme', 'dark');
    }
}

// Initial Check
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'light') {
    setTheme('light');
} else if (savedTheme === 'dark') {
    setTheme('dark');
} else {
    // Default to dark if no preference, or respect system? 
    // Existing site is dark, so let's default to dark if generic.
    // But if system prefers light, maybe we should respect that?
    // Let's stick to the current site default (Dark) unless explicitly Light.
    setTheme('dark');
}

// Event Listener
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        const isLight = htmlElement.getAttribute('data-theme') === 'light';
        setTheme(isLight ? 'dark' : 'light');

        // Add a class for rotation animation
        themeIcon.classList.add('rotate-icon');
        setTimeout(() => {
            themeIcon.classList.remove('rotate-icon');
        }, 500);
    });
}
