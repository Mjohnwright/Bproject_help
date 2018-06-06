var path = require("path");
var express = require("express");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    
    // index route loads index.handlebars
    app.get("/", function (req, res) {
        res.render("index");
    });

    // loads MgrCreateAccount.handlebars
    app.get("/MgrCreateAccount", function (req, res) {
        console.log('MANGER CREATE ACCOUNT IS FIRED!')
        res.render("MgrCreateAccount");
    });

    // Loads MgrLogIn.handlebars
    app.get("/MgrLogIn", function (req, res) {
        console.log('MANGER LOGIN GET FIRED!')
        res.render("MgrLogIn");
    });
}

// Renders all events for Volunteers to view
// app.get("/events", function (req, res) {
//     db.campaignevent.findAll({
//         // var hbsObject = {
//         campaignevents: data //burger is the database and data is what is inside the db
//     }).then(campaignevents => {
//         //index is the name of the page and hbsObject is db object

//         var hbsObject = {
//             CampaignEvents: CampaignEvent
//         }
//         console.log(hbsObject);
//         res.render("eventlistings", hbsObject);

//     });
// })

// Renders specific events created by a Manager for only the Manager to view
// app.get("/myEvents", isLoggedIn, function (req, res) {
//     db.Opportunity.findAll({
//         include: {
//             model: db.Member,
//             where: {
//                 id: req.user.id
//             }
//         }
//     }).then(opportunities => {
//         const handlebarsData = {
//             opportunityData: {
//                 opportunities
//             }
//         }
//         console.log(handlebarsData)
//         res.render(path.join(__dirname, "../views/my_events.handlebars"), handlebarsData);
//     })
// })