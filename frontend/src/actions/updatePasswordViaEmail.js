import User from "../sequelize";
import bcrypt from "bcrypt";
const BYCRPT_SALT_ROUNDS = 12;
module.exports = (app) => {
  app.put(`${process.env.REACT_APP_ARQIVE}/auth/users/`, (req, res, next) => {
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((user) => {
      if (user != null) {
        bcrypt
          .hash(req.body.password, BYCRPT_SALT_ROUNDS)
          .then((hashedPassword) => {
            user.update({
              password: hashedPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null,
            });
          })
          .then(() => {
            res.status(200).send({ message: "password updated" });
          });
      } else {
        res.status(404).json("no user exists in db to update");
      }
    });
  });
};
