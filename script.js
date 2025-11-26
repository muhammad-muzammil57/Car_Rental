const headerMenuBtn = document.querySelector('.header__menu');
const headerNavAuth = document.querySelector('.header__nav-auth');
const showMenuIcon = document.querySelector('.header__menu .bx-menu-right');
const hideMenuIcon = document.querySelector('.header__menu .bx-x');

headerMenuBtn.addEventListener('click', () => {
    headerNavAuth.classList.toggle('show');

    if (headerNavAuth.classList.contains('show')) {
        showMenuIcon.style.display = 'none';
        hideMenuIcon.style.display = 'block';
    } else {
        showMenuIcon.style.display = 'block';
        hideMenuIcon.style.display = 'none';
    }
})

const filterBtns = document.querySelectorAll('.cars__list-btn button');
const carCards = document.querySelectorAll('.cars__card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedBrand = btn.getAttribute('data-brand');

        carCards.forEach(card => {
            const cardBrand = card.getAttribute('data-brand');

            if (cardBrand === selectedBrand || selectedBrand === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })

        // Remove active style from all buttons
        filterBtns.forEach(btn => btn.classList.remove('btn-primary'));
        filterBtns.forEach(btn => btn.classList.add('btn-secondary'));

        // Add active style to the clicked button
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');
    })
})