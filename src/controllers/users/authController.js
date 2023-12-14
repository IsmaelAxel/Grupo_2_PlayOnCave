const db = require("../../database/models");

module.exports = {
  loginGoogle: async (req, res) => {
    try {
      const {
        provider,
        _json: {
          sub: googleId,
          given_name: name,
          family_name: surname,
          picture,
          email,
        },
      } = req.session.passport.user;

      const [{ id, roleId }, isCreate] = await db.Users.findOrCreate({
        where: { socialId: googleId },
        defaults: {
          name,
          surname,
          avatar: picture,
          socialId: googleId,
          socialProvider: provider,
          email,
        },
      });

      const address = await db.Addresses.create({ userId: id });

      if (!isCreate) {
        await address.destroy();
      }

      req.session.userLogin = {
        id,
        name,
        role: roleId,
      };

    
      const orders = await db.Orders.findOne({
        where: {
          userId: id,
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
      });

      if (orders) {
        req.session.cart = {
          orderId: orders.id,
          total: orders.total,
          products: orders.cart.map(
            ({
              quantity,
              products: { id, title, price, discount, images },
            }) => {
              return {
                id,
                discount,
                title,
                price,
                image: images.find((image) => image.main).file,
                quantity,
              };
            }
          ),
        };
      } else {
        const newOrder = await db.Orders.create({
          total: 0,
          userId: id,
          statusId: 1,
        });

        req.session.cart = {
          orderId: newOrder.id,
          total: newOrder.total,
          products: [],
        };
      }

      res.redirect("/users/profile");
    } catch (error) {
      console.log(error);
     
      res.status(500).send("Internal Server Error");
    }
  },
};
