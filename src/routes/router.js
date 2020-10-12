'use strict';
const express = require('express');
const router = express.Router();

const PrismaService = require('../models/prisma-service.js');

router.post('/signup', signUp);
// router.post('/signIn', signIn);

router.get('/user', getAllUsers);
router.get('/profile/:id', getProfile);

router.get('/getAllRecipe/:id', getAllRecipe);
router.get('/recipe/:id', getRecipe);

router.post('/recipe', postRecipe);


async function getAllUsers(req, res, next) {

    try {

        const results = await PrismaService.getMany('user');
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};

async function signUp(req, res, next) {

    try {

        const results = await PrismaService.createUser(req.body);
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};

async function getProfile(req, res, next) {

    try {

        const results = await PrismaService.getProfile(parseInt(req.params.id));
        res.status(200).send(results)

    } catch (err) {

        console.error(err);

    };


};

async function getRecipe(req, res, next) {

    try {

        const results = await PrismaService.getRecipe(parseInt(req.params.id));
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    }

}

async function getAllRecipe(req, res, next) {

    try {

        const results = await PrismaService.getAllRecipe(parseInt(req.params.id));
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

};

async function postRecipe(req, res, next) {

    try {

        const results = await PrismaService.create(req.body);
        res.status(200).send(results);

    } catch (err) {

        console.error(err);

    };

}

module.exports = router;
