'use strict';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class PrismaService {


    /**
     * createUser() is a combo function that when a user signs up that they created a new user record and a profile record at the same time.
     * @param {Object} body This is the request body that should contain the following: [ email, password, firstName, lastName]. All provided from the create user form and passed on the request body
     * @returns Response from DB
     */
    async createUser(body) {

        const { email, password, firstName, lastName } = body;

        const response = await prisma.user.create({
            data: {
                email,
                password,
                active: true,
                Profile: {
                    create: {
                        firstName,
                        lastName,
                        chefRating: 1,
                        cookbook: '',
                        followers: ''
                    }
                }
            },
            include: {
                Profile: true,
            }
        });

        return response;

    };


    /**
     * createRecipe() will add a new recipe record to the database as well as link it to the profile/user that is making the request.
     * @param {Object} body This is the request body that should contain the following: [ Profile, recipeName, thumbnail, prepTime, ingredients, directions].
     *
     * body.Profile : This is an integer that is the users profile id and will be used to create the relationship in the database. This is being done on lines 51-54. The connect part is connecting the recipe record to the profile record (our foreign key connection)
     * @returns Response from DB
     */
    async createRecipe(body) {

        let temp = body.Profile;
        body.Profile = {
            connect: { id: temp },
        };

        const response = await prisma.recipe.create({
            data: body,
        });

        return response;

    };


    /**
     * updateRecipe() will update a recipe record by ID
     * @param {*} id recipe_id
     * @param {*} body data fields to update
     * @returns Updated record from DB
     */
    async updateRecipe(id, body) {

        return await prisma.recipe.update({
            where: { id },
            data: body
        });

    };


    /**
     * deleteRecipe() will delete a recipe record by ID
     * @param {*} id recipe_id
     * @returns Deleted record from DB
     */
    async deleteRecipe(id) {

        return await prisma.recipe.delete({
            where: { id },
        });

    }


    /**
     * getRecipe() will retrieve an individual recipe record by ID
     * @param {Number} id recipe_id
     * @returns Response from DB
     */
    async getRecipe(id) {

        return await prisma.recipe.findOne({
            where: {
                id,
            }
        });

    };


    /**
     * getAllRecipe() will retrieve all recipe records
     * @returns Response from DB
     */
    async getAllRecipe() {

        return await prisma.recipe.findMany();

    }


    /**
     * getAllPersonalRecipeList() will retrieve all recipes associated with the provided profile id
     * @param {Number} id profile_id
     */
    async getAllPersonalRecipeList(id) {

        return await prisma.recipe.findMany({
            where: {
                profile_id: id,
            }
        })

    };


    /**
     * getProfile() will retrieve the profile that has a matching id
     * @param {Number} id
     */
    async getProfile(id) {

        return await prisma.profile.findOne({
            where: {
                id,
            },
        });

    };

    /**
     * updateProfile() will update the profile with the provided id
     */
    async updateProfile(id, body) {

        return await prisma.profile.update({
            where: { id },
            data: {
                cookbook: JSON.stringify(body)
            }
        });

    };


}

module.exports = new PrismaService();

