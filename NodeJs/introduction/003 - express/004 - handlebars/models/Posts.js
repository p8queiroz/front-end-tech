const db = require("./database");

const Post = db.sequelize.define(
    'posts', {
    Title: {
        type: Sequelize.STRING
    },
    Content: {
        type: Sequelize.STRING
    },
});

Post.sync({ force: true });
Post.create({
    Title: "Test",
    Content: "Loren ispum tset lor vinitun"
})