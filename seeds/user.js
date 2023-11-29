const { User } = require('../models');

const userData = [{
    username: 'LukeSkywalker',
    password: 'ikisssisters'

},
{
    username: 'PrincessLeia',
    password: 'thegeneral'
},
{
    username: 'Yoda',
    password: 'babygrogu'
},
{
    username: 'Chewbacca',
    password: 'stansolo'
},
{
    username: 'DarthVader',
    password: 'lukeiamyourfather'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;