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
    //MANAGER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    // Posts Manager when a new MANAGER ACCOUNT is created 
    app.post("/api/MgrCreateAccount", function (req, res) {
        console.log("req.body = ", req.body);
        db.Manager.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                organization_name: req.body.organization_name,
                city: req.body.city,
                password: req.body.password,
                // passwordConf: req.body.passwordConf    
            })
            .then(function (dbManager) {
                console.log("event is through the API-ROUTE");
                res.redirect("/MgrLogIn"); //this does not cause an error

            });
    });

    // Posts Manager EVENTS for the Manager 
    app.post("/api/managersevents", function (req, res) {
        console.log("req.body = ", req.body);
        db.CampaignEvent.create({
                event_title: req.body.event_title,
                event_description: req.body.event_description,
                organization_name: req.body.organization_name,
                organizer_first_name: req.body.organizer_first_name,
                organizer_last_name: req.body.organizer_last_name,
                street_address: req.body.street_address,
                city: req.body.city,
                state: req.body.state,
                zip_code: req.body.zip_code,
                phone_number: req.body.phone_number,
                time_slots: req.body.volunteers_needed,
                ManagerId: req.body.managerId
            })
            .then(function (dbCampaignEvent) {
                res.json(dbCampaignEvent);
                console.log("event is through the API-ROUTE");

            });
    });

    // Get MANAGER BY EMAIL
    app.get("/api/MgrLogIn/:email", function (req, res) {
        db.Manager.findOne({ 
            where: {
                email: req.params.email
            }
        }).then(function (dbManager) {
            res.json(dbManager.JSON());
            

        })
    });

    // Get EVENTS for the Manager 
    //THIS MIGHT NEED A PARAMETER BASED UP MANAGER ID
    app.get("/api/events/:id", function (req, res) {
        CampaignEvent.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (res) {
            return res.json(results);
        });

    });







};

// NEED TO CREATE A POST EVENT FOR WHEN A NEW EVENT IS CREATED

// I HAVE THE POST EVENT IN THE JS FILE, BUT NOW I NEED IT IN THE API ROUTES FILE