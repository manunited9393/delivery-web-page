function callMe(triggerSelectors, windowPopupSelectors, closeSelectors, wrap) {
    const btnCall = document.querySelectorAll(triggerSelectors),
        windowCall = document.querySelectorAll(windowPopupSelectors),
        closeFormBtn = document.querySelectorAll(closeSelectors),
        wrapper = document.querySelector(wrap);

    btnCall.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            windowCall[i].classList.toggle('popup_active');
            wrapper.classList.toggle('wrap_active');

            if (window.getComputedStyle(windowCall[i]).opacity == '0') {
                windowCall[i].classList.add('popup_active');
            } else {
                windowCall[i].classList.remove('popup_active');
            }
        });
    });

    function closeForm(triggersClose, popupSelectors) {
        const closeButtons = document.querySelectorAll(triggersClose),
              popups = document.querySelectorAll(popupSelectors);

        closeButtons.forEach(item => {
            item.addEventListener('click', () => {
                popups.forEach(popup => {
                    popup.classList.remove('popup_active');
                });
                wrapper.classList.remove('wrap_active');
                wrapper.classList.remove('wrap_active-white');
            });
        });
    }

    closeForm('.wrap', '.popup');
    closeForm('.popup__icon', '.popup');



    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500 && window.pageYOffset < sum) {
            windowCall.forEach(item => {
                item.classList.remove('popup_active');
            });
        }
    });


    function height() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        return scrollHeight - 1000;
    }
    let sum = height();

}


export default callMe;