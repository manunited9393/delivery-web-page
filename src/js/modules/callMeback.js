function callMe() {
    const btnCall = document.querySelectorAll('.btn-trigger-call'),
        windowCall = document.querySelectorAll('.request'),
        wrap = document.querySelector('.wrap'),
        requestWrap = document.querySelectorAll('.request'),
        closeForm = document.querySelector('.close-icon');

    btnCall.forEach((btn, i) => {
        btn.addEventListener('click', () => {

            if (window.getComputedStyle(windowCall[i]).opacity == '0') {
                windowCall[i].classList.add('request_active');
                wrap.classList.add('invisible-wrapper');
            } else {
                windowCall[i].classList.remove('request_active');
            }
        });
    });

    wrap.addEventListener('click', () => {
        wrap.classList.remove('invisible-wrapper');
        windowCall.forEach(item => {
            item.classList.remove('request_active');
        });
    });

    // requestWrap.forEach(item => {
    //     item.addEventListener('click', () => {
    //         item.classList.remove('request_active');
    //         wrap.classList.remove('invisible-wrapper');
    //         windowCall.forEach(item => {
    //             item.classList.remove('request_active');
    //         });
    //     });
    // });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500 && window.pageYOffset < sum) {
            windowCall.forEach(item => {
                item.classList.remove('request_active');
                wrap.classList.remove('invisible-wrapper');
            });
        }
    });

    closeForm.addEventListener('click', () => {
        requestWrap.forEach(item => {
            item.classList.remove('request_active');
            wrap.classList.remove('invisible-wrapper');
            windowCall.forEach(item => {
                item.classList.remove('request_active');
            });
        });
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