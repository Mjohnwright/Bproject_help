$(document).ready(function () {
    // console.log("MgrCreateAccount is ready!")
    $("#mgrcreateaccount").on("click", function (event) {
        event.preventDefault();
        console.log("Manager create account is clicked");
        // A function to handle what happens when the form is submitted to create a new Author
        // function handleCreateAccountFormSubmit(event) {
        //     event.preventDefault();

        // function validation() {
        //     var password = $("#password").val();
        //     var password2 = $("#passwordConf").val();
        //     if (password != password2) {
        //         $("#passwordConf").val("");
        //         $("#password").val("");
        //         $(".password-area").html(
        //             "<div class='password-area'><h3><strong>Passwords do not match. Please try again<strong></h3></div>"
        //         );
        //     } else {
        //         $(".alert-area").html("");
        //     }
        // }
        newManager = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            email: $("#email").val().trim(),
            organization_name: $("#organization_name").val().trim(),
            city: $("#city").val().trim(),
            password: $("#password").val().trim(),
            // passwordConf: $("#passwordConf").val().trim()
        }
        console.log("newManager = " + newManager);
    
        // Send an AJAX POST-request with jQuery
        $.post("/api/MgrCreateAccount", newManager)
            // On success, run the following code
            .then(function () {
                console.log("New Manager is posted");
                // res.redirect("/managerlogin"); // this does does fire the HTML-Routes

            })

        // empty each input box by replacing the value with an empty string

        $("#first_name").val("");
        $("#last_name").val("");
        $("#email").val("");
        $("#organization_name").val("");
        $("#city").val("");
        // $("#password").val("");
        // $("#passwordConf").val("");
    });
});