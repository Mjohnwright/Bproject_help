$(document).ready(function () {
    // console.log("Vol Event Listing is ready!");

    $("#btnEvents").on("click", function (event) {
        console.log("Event Listing on Index page is clicked");

        function getEvents() {
            $.get("/api/events", function (data) {
                console.log(data);
            })
        };

        getEvents();


        $("eventreg").on("click", function (post) {
            event.preventDefault();
        })



        $("#eventreg").on("click", function (post) {
            event.preventDefault();
            alert("You are registered for the event!");
            var newRegister = {
                VolunteerId: 3,
                CampaignEventId: 3
            }
            $.ajax('/api/eventreg')({
                    method: "POST",
                    url: "/api/postreg",
                    data: post
                })
                .then(function (events) {
                    client.messages
                        .create({
                            body: `Hello from Twilio`,
                            from: '+16104630729',
                            //  mediaUrl: '',
                            to: '+16107801122'
                        })
                        .then(message => console.log(message.sid))
                        .done();
                })
        });
    });
});

// var newRegister = {
//     VolunteerId: // sessionStorage.getItem('userId'),
//     CampaignEventId: // the id of the event that they clicked on 
// }