$("#contactForm").submit((e) => {
    $("#form_alerts").html("<div class='spinner-grow text-primary my-2'></div>")
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwGyAEPnPybjmDV_T6Fe1O2p6UIzYieYBUJjuCCUD_54CyAxeIYiXh2yXM_C5Rm2lo1/exec",
        data: $("#contactForm").serialize(),
        method: "post",
        success: function (response) {
            $("#form_alerts").html("<div class='alert alert-primary'>Message sent successfully. <i class='far fa-smile-beam'></i></div>")
        },
        error: function (err) {
            $("#form_alerts").html("<div class='alert alert-danger'>Message falied to send. <i class='far fa-sad-tear'></i></div>")

        }
    })
})