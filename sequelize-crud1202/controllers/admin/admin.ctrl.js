const models = require('../../models');
const Products = require('../../models/Products');

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );

    // SELECT * FROM Products;
    models.Products.findAll({

    }).then((products) => {
        res.render('admin/products.html', {products : products})
    })


}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    // res.send(req.body);
    
    models.Products.create(req.body)
    .then(()=> {
        res.redirect('/admin/products')
    })
}

exports.get_products_detail = (req, res) => {

    models.Products.findBypk(req.params.id).then((product) => {

        res.render('admin/detail.html', {product})

    })

}