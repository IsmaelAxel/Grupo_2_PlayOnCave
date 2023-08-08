module.exports = {
    productCart: (req, res) => {
        return res.render('productCart');
    },
    productDetail: (req, res) => {
        return res.render('productDetail');
    },
    productEdit: (req, res) => {
        return res.render('productEdit');
    },
    productAdd: (req, res) => {
        return res.render('productAdd');
    }

}