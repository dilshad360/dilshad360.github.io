$("#contactForm").submit((e) => {
    $("#form_alerts").html("<div class='spinner-grow text-primary my-2'></div>")
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxns4lvaA8WIM7pcrlLikYP8fia6bWnN0OZsoGWSH4qNpAKR1e0GIinj0SZoUpRe7ud/exec",
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
