module.exports = {
    productCart: require('./products/productCart'),
    productDetail: require('./products/productDetail'),
    productEdit: require('./products/edit'),
    productAdd: require('./products/productAdd'),
    productUpdate: require('./products/update'),
    productCreate: require('./products/create'),
    productDelete: require('./products/delete'),
    'buscar': (req, res) => {
        const title = req.query.titulo;

        fetch(`${API}&t=${title}`)
        .then(data => {
          return data.json() 
        })
        .then(movie => {            
            return res.render('moviesDetailOmdb',{movie})
        })
        .catch(error => console.log(error))}
}