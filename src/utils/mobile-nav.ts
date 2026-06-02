const manageMobileNav = () => {
    const headerBtn = document.querySelector('.header__bars') as HTMLElement;
    const mobileNav = document.querySelector('.mobile-nav') as HTMLElement;
    const mobileLinks = document.querySelectorAll('.mobile-nav__link') as NodeListOf<HTMLElement>;

    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
}

export default manageMobileNav;