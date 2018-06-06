// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// require("dotenv").config(); // installed using: npm install dotenv


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./controllers/HTML-Routes.js")(app);
require("./controllers/Manager-API-Routes.js")(app);
require("./controllers/Volunteer-API-Routes.js")(app);
// require("./routes/event-routes.js")(app);
// require("./routes/user-routes.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    })

// ********************** TWILIO ****************************************
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// const accountSid = 'AC99ccd7368d5e2e45dc69eeabaf2374cd';
// const authToken = '6f2d5b8eff96067cbf5ab73a9332e1cb';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//       .create({
//          body: `Hello from Twilio`,
//          from: '+16104630729',        
//         //  mediaUrl: '',
//          to: '+16107801122'
//        })
//       .then(message => console.log(message.sid))
//       .done();

    // app.listen(PORT, function() {
    //     console.log("App listening on PORT " + PORT);
    // });

    // client.messages
    //   .create({
    //      body: `Thanks for volunteering`,
    //      from: '+16104630729',        
    //     //  mediaUrl: '',
    //      to: '+'+ USERPHONENUMBER','
    //    })
    //   .then(message => console.log(message.sid))
    //   .done();

    // =============================================================   
        /// TEST CODE DELETE ME  //
// =============================================================
db.Manager.create({
    first_name: "Joe",
    last_name: "The",
    email: "thejoe@yahooligans.com",  
    organization_name: "British Dental Association",  
    city: "Wilshire, Kentucky",  
    password: "hello"

});
//for now, manager MUST be created before a campaign event can be
db.CampaignEvent.create({
    event_title: 'Food Drive',
    event_description: 'feeed me',
    organization_name: '2012 apocalypse fund',
    organizer_first_name: 'The', 
    organizer_last_name: 'Joe',
    street_address: '1234 Evergreen Terrace',
    city: 'Springfield',
    state: 'USA',
    zip_code: '12345',
    phone_number: '1235352222',
    time_slots: 2,
    
    //this is the foreign key that will be supplied by the middleware
    //for now I am just supplying it in the table directly
    //the table will not if ManagerID is Null due to line 26 of events.js
    ManagerId: 1
});
db.Volunteer.create({
    first_name: 'Isaac',
    last_name: 'Philadelphia',
    street_address: '1234 Evergreen Drive',
    city: 'New Hork',
    email: 'asdfasdf@gmail.com'
});

db.EventVolunteer.create({
    time_slot: 'afternoon',
    CampaignEventId: '1',
    VolunteerId: '1',

});
});

// =============================================================
/// TEST CODE DELETE ME//////
// =============================================================


