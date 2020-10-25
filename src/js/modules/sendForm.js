import $ from "jquery";


function sendForm() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        if($('#inputCheckbox').is(":checked")) {
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.request').removeClass('request_active');
                $('.wrap').removeClass('invisible-wrapper');
                $('form').trigger('reset');
                alert('Заявка успешно оставлена');
            });
        } else {
            alert('Вам должны согласиться с политикой конфиденциальности');
        }


        

        return false;
    });
    

}

export default sendForm;


