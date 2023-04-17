module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
          email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          username: {
            type: Sequelize.STRING,
            allowNull: false
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false
          }
        });
        const  privatekey =  "this is my secret"
        Users.prototype.generateAuthToken = function() {
            const token = jwt.sign(
                { id: this.id, username: this.username },
                 privatekey);
        return token;
      };
      return Users;
    };