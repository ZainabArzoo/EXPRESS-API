const app = require('express')
const router = app.Router()
const { AddProduct,AllProducts,UpdateProduct,DeleteProduct,ProductByBrand,ProductByCategory } = require('./Controller')


router.post('/addproduct', AddProduct)
router.get('/allproducts', AllProducts)
router.put('/updateproduct', UpdateProduct)
router.delete('/deleteproduct', DeleteProduct)
router.get('/productbybrand/:brand', ProductByBrand)
router.get('/productbycategory/:category', ProductByCategory)

module.exports = router
