function moreInfo() {

    const btnPrice = document.querySelectorAll('.prices__btn'),
          descr = document.querySelectorAll('.card-info'),
          close = document.querySelectorAll('.card-info__close');

    btnPrice.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            descr[i].classList.add('card-info_active');
            // document.querySelectorAll('.prices__cards').style.overflow = '';
        });
    });

    close.forEach(btnClose => {
        btnClose.addEventListener('click', () => {
            descr.forEach(item => {
                item.classList.remove('card-info_active');
                // document.querySelectorAll('.prices__cards').style.overflow = 'hidden';
            });
        });
    });


}

export default moreInfo;