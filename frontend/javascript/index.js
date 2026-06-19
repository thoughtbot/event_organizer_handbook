import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

// Sidebar toggle
const toggle = document.getElementById('sidebar-toggle');
const layout = document.getElementById('site-layout');

if (toggle && layout) {
  const STORAGE_KEY = 'sidebar-collapsed';

  const setCollapsed = (collapsed) => {
    if (collapsed) {
      layout.dataset.sidebarCollapsed = '';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '&#8250;';
    } else {
      delete layout.dataset.sidebarCollapsed;
      toggle.setAttribute('aria-expanded', 'true');
      toggle.innerHTML = '&#8249;';
    }
    localStorage.setItem(STORAGE_KEY, collapsed);
  };

  toggle.addEventListener('click', () => {
    setCollapsed(!layout.hasAttribute('data-sidebar-collapsed'));
  });

  // Restore persisted state on page load
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    setCollapsed(true);
  }
}
