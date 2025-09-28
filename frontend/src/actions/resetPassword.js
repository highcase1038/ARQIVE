import User from "../sequelize";
module.exports = (app) => {
  app.get(`${process.env.REACT_APP_ARQIVE}/auth/users/`, (req, res, next) => {
    User.findOne({
      where: {
        resetPasswordToken: req.query.resetPasswordToken,
        resetPasswordExpires: {
          $gt: Date.now(),
        },
      },
    }).then((user) => {
      if (user === null) {
        res.json("password reset link is invalid or has expired");
      } else {
        res.status(200).send({
          username: user.username,
          message: "password reset link a-ok",
        });
      }
    });
  });
};
