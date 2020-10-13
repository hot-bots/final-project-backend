'use strict';
const express = require('express');
const router = express.Router();
const axios = require('axios');

const PrismaService = require('../models/prisma-service.js');
const { response } = require('express');

router.post('/signup', signUp);
// router.post('/signIn', signIn);

router.get('/user', getAllUsers);
router.get('/profile/:id', getProfile);
// cookbook
router.get('/searchByCuisine', searchByCuisine);
router.get('/searchByIngredients', searchByIngredients);
const apiKey = process.env.apiKey;
async function searchByCuisine(req, res, next){
//https://api.spoonacular.com/recipes/{id}/information&apiKey=
// make get request using cuisine as argument

let url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${req.body.cuisine}&apiKey=${apiKey}`

let responseFromGet = await axios.get(url)

res.status(200).send(responseFromGet.data.results);
}

async function searchByIngredients(req, res, next){

    try{
        let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${req.body.ingredients}&apiKey=${apiKey}`;
        let responseFromGet = await axios.get(url);
        res.status(200).send(responseFromGet.data);
    } catch (error){
        console.error(error);
    }



}

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


module.exports = router;
