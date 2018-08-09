var express = require('express');
var router = express.Router();
var fs = require('fs-extra');

var Product = require('../models/product');
var Category = require('../models/category');

// get all products
router.get('/', function(req, res) {
    Product.find(function(err, products){
        if (err){
            console.log(err);
        }

        res.render('all_products', {
            title: 'All Products',
            products: products
        });
    });
});

// get products by category
router.get('/:category', function(req, res) {

    var categorySlug = req.params.category;
    Category.findOne({slug: categorySlug}, function(err, c) {
        Product.find({category: categorySlug}, function(err, products){
            if (err){
                console.log(err);
            }
    
            res.render('cat_products', {
                title: c.title,
                products: products
            });
        });
    })
});

// get product detail
router.get('/:category/:product', function(req, res) {

    var productSlug = req.params.product;

    var galleryImages = null;

    Product.findOne({slug: productSlug}, function(err, p){
        if (err) {
            console.log(err);
        } else {
            var galleryDir = 'public/product_images/' + p._id + '/gallery';

            fs.readdir(galleryDir, function(err, files){
                if (err) {
                    console.log(err);
                } else {
                    galleryImages = files;

                    res.render('product',{
                        title: p.title,
                        p: p,
                        galleryImages: galleryImages
                    })
                }
            });
        }
    });

});

module.exports = router;