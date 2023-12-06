const { validationResult } = require("express-validator");
const db = require("../../database/models");
module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        req.session.userLogin = {
          id: user.id,
          name: user.name,
          role: user.roleId,
        };

        req.body.remember !== undefined &&
          res.cookie('PlayOnCave', req.session.userLogin, {
            maxAge: 1000 * 60 * 30,
          });

        db.Orders.findOne({
          where: {
            userId: user.id,
            statusId: 1,
          },
          include: [
            {
              association: "cart",
              include: [
                {
                  association: "products",
                  include: ["images"],
                },
              ],
            },
          ],
        }).then((orders) => {
          if (orders) {
            req.session.cart = {
              orderId: orders.id,
              total: orders.total,
              products: orders.cart.map(
                ({ quantity, products: { title, price, images } }) => {
                  return {
                    title,
                    price,
                    image: images.find((image) => image.main).file,
                    quantity,
                  };
                }
              ),
            };
            console.log(req.session.cart, '<<<<<<<<<<<<<<<<<');
            return res.redirect("/");
          } else {
            db.Orders.create({
              total: 0,
              userId: user.id,
              statusId: 1
            }).then(orders => {
              req.session.cart = {
                orderId: orders.id,
                total: orders.total,
                products: [],
              };
              console.log(req.session.cart, '<<<<<<<<<<<<<<<<<');
              return res.redirect("/");
            })
          }
        })
      }).catch((error) => console.log(error));
  } else {

    return res.render('login', {
      errors: errors.mapped()
    })
  }
};
