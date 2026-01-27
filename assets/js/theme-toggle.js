// Theme Toggle Logic
const htmlElement = document.documentElement;

// Icons (Simple SVGs)
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

// Function to set theme
function setTheme(theme) {
    if (theme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    }
    updateIcons(theme);
}

function updateIcons(theme) {
    const icons = document.querySelectorAll('.theme-icon-content');
    icons.forEach(icon => {
        icon.innerHTML = theme === 'light' ? moonIcon : sunIcon;
    });
}

// Initial Check
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default to dark
setTheme(initialTheme);

// Event Listener
function attachToggleListeners() {
    const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
    toggleButtons.forEach(btn => {
        // Prevent duplicate listeners
        if (btn.hasAttribute('data-listener-attached')) return;

        btn.addEventListener('click', () => {
            const isLight = htmlElement.getAttribute('data-theme') === 'light';
            setTheme(isLight ? 'dark' : 'light');

            // Animation
            const iconContent = btn.querySelector('.theme-icon-content');
            if (iconContent) {
                iconContent.classList.add('rotate-icon');
                setTimeout(() => {
                    iconContent.classList.remove('rotate-icon');
                }, 500);
            }
        });
        btn.setAttribute('data-listener-attached', 'true');
    });
}

// Run on load and expose for dynamic content if needed
document.addEventListener('DOMContentLoaded', attachToggleListeners);
// Also run immediately in case DOM is already ready
attachToggleListeners();
