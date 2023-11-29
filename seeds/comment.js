const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Try not. Do or do not. There is no try.",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "The ability to speak does not make you intelligent",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "Sorry lady. I do not understand frog.",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "Come on, baby! Do the magic hand thing.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Let go of your hate.",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "Laugh it up, fuzzball!",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "You are just a child in a mask.",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "Never underestimate a droid.",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;