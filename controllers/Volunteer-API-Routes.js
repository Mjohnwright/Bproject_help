// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var path = require("path");
var express = require("express");


// Routes
// =============================================================
module.exports = function (app) {

    // Posts Manager when a new ACCOUNT is created 
    app.post("/api/newVolunteer", function (req, res) {
        console.log("req.body = ", req.body);
        db.Volunteer.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                street_address: req.body.street_address,
                city: req.body.city,
                state: req.body.state,
                // zipcode: req.body.zipcode,
                email: req.body.email,
                password: req.body.password,
                // passwordConf: req.body.passwordConf    

            })
            .then(function (dbVolunteer) {
                res.json(dbVolunteer);
                console.log("event is through the API-ROUTE");

            });
    });


    // Gets all campaign events 
    app.get("/api/events", function (req, res) {
        db.CampaignEvent.findAll({}).then(function (dbCampaignEvent) {
            res.json(dbCampaignEvent)
        });
    });

    // Gets all campaing events specific to a Volunteer
    app.post("/api/postreg", function (req, res) {
        console.log(req.body);
        db.EventVolunteer({
            id: req.body.id,
            time_slot: req.body.time_slot
        }, {
            where: {
                //this is the event id
                id: req.body.id
            }
        }).then(function (dbEventVolunteer) {
            res.json(dbEventVolunteer);
        });
    });

}
