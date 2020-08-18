const Sequelize = require("sequelize");
const sequelize = new Sequelize("sm_paulodev", "root", "vertrigo", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


/*const Post = sequelize.define(
    'posts', {
    Title: {
        type: Sequelize.STRING
    },
    Content: {
        type: Sequelize.STRING
    },
});

//Post.sync({ force: true });
Post.create({
    Title: "Test",
    Content: "Loren ispum tset lor vinitun"
})

const Comments = sequelize.define(
    'comments', {
    Content: {
        type: Sequelize.STRING
    },
    PostId: {
        type: Sequelize.INTEGER
    },
    UserId: {
        type: Sequelize.INTEGER
    },
});

Comments.sync({ force: true });

sequelize.authenticate()
    .then(() => console.log("*********logado********"))
    .catch((error) => console.log("*********error********", error))*/