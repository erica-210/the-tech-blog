const { Post } = require('../models');

const postData = [
    {
        title: "The Clone Wars",
        content: "The Jedi Order fights to restore peace to the galaxy by leading the Republic army of genetically engineered clones against the seemingly never-ending droid army of the Separatist Alliance commanded by the evil Count Dooku.",
        user_id: 1
    },
    {
        title: "The Mandalorian",
        content: "Daddy Pascal protects baby Grogu from baddie Gideon.",
        user_id: 2
    },
    {
        title: "The Empire Strikes Back",
        content: "The Rebels are on the run as Darth Vader pursues them in search of Luke Skywalker.",
        user_id: 3

    },
    {
        title: "The Force Awakens",
        content: "Solo is old, Luke is missing, and Leia gets things done. Also, a love triangle blooms.",
        user_id: 4
    },
    {
        title: "The Last Jedi",
        content: "Follow Rey as she seeks the aid of Luke Skywalker in hopes of turning the tide for the Resistance in the fight against Kylo Ren.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;