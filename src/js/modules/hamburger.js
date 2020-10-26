function hamburger(triggerSelector, menuSelector, linkSelectors, wrapperSelector) {
    const   hamburger = document.querySelector(triggerSelector),
            menu = document.querySelector( menuSelector),
            menuItem = document.querySelectorAll(linkSelectors),
            wrapper = document.querySelector(wrapperSelector);
            // scroll = calcScroll();


    
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        hamburger.classList.toggle('hamburger_active');
        wrapper.classList.toggle('wrap_active-white');
        document.body.style.overflow = 'hidden';
    });
    
        
    wrapper.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
        hamburger.classList.remove('hamburger_active');
        wrapper.classList.remove('wrap_active-white');
        document.body.style.overflow = '';
    });
    
    
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('header__menu_active');
        hamburger.classList.remove('hamburger_active');
        wrapper.classList.remove('wrap_active-white');
        document.body.style.overflow = '';
        });
    });
    

    
    
    // function calcScroll() {
    //     let div = document.createElement('div');

    //     div.style.width = '50px';
    //     div.style.height = '50px';
    //     div.style.visibility = 'hidden';
    //     div.style.overflow = 'scroll';

    //     document.body.appendChild(div);

    //     let scrollWidth = div.offsetWidth - div.clientWidth;

    //     div.remove();

    //     return scrollWidth;
    // }
}


export default hamburger;
    