const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {readJSON} = require('../../data');
const productRead=readJSON('products.json');
module.exports =  (req, res) => {
    const results = productRead.filter(product => product.title.toLowerCase().includes(req.query.keywords.toLowerCase()))
    return res.render('searchBar',{
        results,
        toThousand,
        keywords: req.query.keywords,
    })
  }