const router = require('express').Router();
// imports all the functions from the user controller file
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/')
    //  get all thoughts
    .get(getThoughts)
    //  creates a new thought
    .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    // gets a single thought
    .get(getSingleThought)
    // updates a thought
    .put(updateThought)
    // deletes a thought
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    // adds a reaction to a thought
    .post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
    // deletes a reaction from a thought
    .delete(removeReaction)


module.exports = router;