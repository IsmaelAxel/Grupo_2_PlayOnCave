const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {writeJSON,readJSON} = require('../data/index');
const productRead=readJSON('products.json');
module.exports ={
    index:(req, res) => {
    return res.render('index',{
    productsFeatured:productRead.filter(product=>product.category==='featured'),
    productsNewReleases:productRead.filter(product=>product.category==='new releases'),
    productsBestSellers:productRead.filter(product=>product.category==='best sellers'),
    toThousand})

    },
    search: (req, res) => {
		const results = productRead.filter(product => product.title.toLowerCase().includes(req.query.keywords.toLowerCase()))
		return res.render('searchBar',{
			results,
			toThousand,
			keywords: req.query.keywords,
		})
	  },


}

