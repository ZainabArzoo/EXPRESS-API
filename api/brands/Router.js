const app = require('express')
const router = app.Router()
const { AddBrand,BrandById,BrandByName,UpdateBrand,DeleteBrand } = require('./Controller')


router.post('/addbrand', AddBrand)
router.get('/brandbyid', BrandById)
router.get('/brandbyname/:brand', BrandByName)
router.put('/updatebrand', UpdateBrand)
router.delete('/deletebrand', DeleteBrand)



module.exports = router