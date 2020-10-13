'use strict';
const express = require('express');
const router = express.Router();

const PrismaService = require('../models/prisma-service.js');

router.get('/recipe/:id', getOneRecipe);
router.get('/recipe', getAllRecipe);
router.get('/getAllPersonalRecipe/:id', getPersonalRecipeList);

router.post('/recipe', postRecipe);
router.put('/recipe/:id', updateRecipe);
router.delete('/recipe/:id', deleteRecipe);


/**
 * Retrieves ONE recipe record by ID from the database
 */
async function getOneRecipe(req, res, next) {

    try {

        const results = await PrismaService.getRecipe(parseInt(req.params.id));
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};


/**
 * Retrieves all Recipe Records from the database.
 */
async function getAllRecipe(req, res, next) {

    try {

        const results = await PrismaService.getAllRecipe();
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};


/**
 * Retrieves all recipe records for a given profile ID
 * @param {*} req ID comes in on req.params.id (this is the profile ID of the user)
 */
async function getPersonalRecipeList(req, res, next) {

    try {

        const results = await PrismaService.getAllPersonalRecipeList(parseInt(req.params.id));
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};


/**
 * Posts a new recipe record to the database
 * @param {*} req Data comes in on the request body (req.body)
 *
 * sample request body {
 * "Profile": 1  // this is the posting users profile ID
 * "recipeName": "Bagel bites",
 * "thumbnail": "path/to/bites/img",
 * "prepTime": 20,
 * "ingredients": "dough|spice|cheese|crayons",
 * "directions": "random|step|done"
 * }
 */
async function postRecipe(req, res, next) {

    try {

        const results = await PrismaService.createRecipe(req.body);
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};


/**
 * Updates a recipe record by ID
 * @param {*} req ID comes in on req.params.id (id of target recipe)
 * @param {*} req Data fields to update come in on req.body
 */
async function updateRecipe(req, res, next) {

    try {

        const results = await PrismaService.updateRecipe(parseInt(req.params.id), req.body);
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};


/**
 * Deletes a recipe record by ID
 * @param {*} req ID comes in on req.params.id (id of target recipe)
 */
async function deleteRecipe(req, res, next) {

    try {

        const results = await PrismaService.deleteRecipe(parseInt(req.params.id));
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};


module.exports = router;
