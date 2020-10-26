function moreInfo() {

    const btnPrice = document.querySelectorAll('.prices__btn'),
        descr = document.querySelectorAll('.card-info'),
        close = document.querySelectorAll('.card-info__close'),
        pricesSection = document.querySelector('.prices');



    btnPrice.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            descr[i].classList.add('card-info_active');

            const x = window.matchMedia('(max-width: 1200px)');

            function media(x) {
                if (x.matches) {
                    // document.body.style.overflow = "hidden";
                    // pricesSection.classList.add('prices_active-wrap');
                } else {
                    
                }
            }
            media(x);
        });

    });

    close.forEach(btnClose => {
        btnClose.addEventListener('click', () => {
            descr.forEach(item => {
                item.classList.remove('card-info_active');
                
                // document.body.style.overflow = "";
                // pricesSection.classList.remove('prices_active-wrap');
            });
        });
    });


}

export default moreInfo;