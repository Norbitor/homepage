function getPreferredColorScheme() {
    const systemScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const userScheme = localStorage.getItem('scheme');
    if(systemScheme === userScheme) {
        localStorage.removeItem('scheme');
    }
    return userScheme || systemScheme;
}

function applyColorScheme(scheme) {
    document.body.classList.toggle('dark', scheme === 'dark');
    if (scheme === "dark") {
        document.getElementById('schemeSwitcher').textContent = "☀️"
    } else {
        document.getElementById('schemeSwitcher').textContent = "💡"
    }
}

function getPreferredAndApplyColorScheme() {
    const preferredScheme = getPreferredColorScheme();
    applyColorScheme(preferredScheme);
}

function toggleColorScheme() {
    const currentScheme = getPreferredColorScheme();
    const newScheme = currentScheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('scheme', newScheme);
    applyColorScheme(newScheme);
    
}

getPreferredAndApplyColorScheme();

document.getElementById('schemeSwitcher').addEventListener('click', () => toggleColorScheme(this));
