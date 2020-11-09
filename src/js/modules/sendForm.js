function sendForm() {
    const forms = document.querySelectorAll('form');
    const popup = document.querySelectorAll('.popup');
    const wrap = document.querySelector('.wrap');
    const input = document.querySelector('#inputCheckbox');


    forms.forEach(item => {
        sendingFormByRequest(item);
    });

    function sendingFormByRequest(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (input.checked) {
                const request = new XMLHttpRequest();
                request.open('POST', 'mailer/smart.php');
    
                const formData = new FormData(form);
                request.addEventListener('load', () => {
                    if (request.status == 200) {
                        popup.forEach(item => item.classList.remove('popup_active'));
                        wrap.classList.remove('wrap_active');
                        form.reset();
                        alert('form has been send');
                    } else {
                        alert('not ok');
                    }
                });
    
                request.send(formData);
            } else {
                alert('примите соглашении об отправке личных данных');
            }
        });
    }
}

export default sendForm;