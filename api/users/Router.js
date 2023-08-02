const app = require('express')
const router = app.Router()
const { Signup,Login,AllUsers,UserByEmail,UserById,UpdateUser,DeleteUser } = require('./Controller')

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/allusers', AllUsers)
router.get('/userbyid', UserById)
router.get('/userbyemail/:email', UserByEmail)
router.delete('/deleteuser', DeleteUser)
router.put('/updateuser', UpdateUser)


module.exports = router