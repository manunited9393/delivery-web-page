function hamburger() {
    const hamburger = document.querySelector('.hamburger'),
            menu = document.querySelector('.header__menu'),
            menuItem = document.querySelectorAll('.header__menu-item'),
            overlay = document.createElement('div'),
            scroll = calcScroll();
    document.querySelector('.main').append(overlay);


    
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        hamburger.classList.toggle('hamburger_active');
        overlay.classList.toggle('main__overlay');
        document.body.classList.toggle('main__overflow');
        document.body.classList.add('main__margin-right_active');
    });
    
        
    
    
    
    
    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('header__menu_active');
            hamburger.classList.remove('hamburger_active');
            overlay.classList.remove('main__overlay');
            document.body.classList.remove('main__overflow');
            
        });
    });
    
    overlay.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
        hamburger.classList.remove('hamburger_active');
        overlay.classList.remove('main__overlay');
        document.body.classList.remove('main__overflow');
        document.body.style.marginRight = '0px';
    });
    
    
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        div.style.overflow = 'scroll';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }
}


export default hamburger;
    