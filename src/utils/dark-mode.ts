const THEME_KEY = 'theme';

type Theme = 'light' | 'dark' | 'system';

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const getStoredTheme = (): Theme => {
    return (localStorage.getItem(THEME_KEY) as Theme) ?? 'system';
};

const setStoredTheme = (theme: Theme): void => {
    localStorage.setItem(THEME_KEY, theme);
};

const getSystemTheme = (): 'light' | 'dark' => {
    return mediaQuery.matches ? 'dark' : 'light';
};

const applyTheme = (theme: Theme): void => {
    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;

    document.body.classList.toggle('light-mode', resolvedTheme === 'light');
    document.body.classList.toggle('dark-mode', resolvedTheme === 'dark');
};

const darkMode = (): void => {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.theme-toggle');
    let currentTheme = getStoredTheme();

    applyTheme(currentTheme);

    mediaQuery.addEventListener('change', () => {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    });

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const nextTheme: Theme =
                currentTheme === 'light'
                    ? 'dark'
                    : 'light';

            currentTheme = nextTheme;
            setStoredTheme(nextTheme);
            applyTheme(nextTheme);
        });
    });
};

export default darkMode;