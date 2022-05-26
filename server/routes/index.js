const Router = require('express')
const router = new Router()
const tokenRouter = require('./tokenRouter')
const userRouter = require('./userRouter')
const nameRouter = require('./nameRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/name', nameRouter)
router.use('/token', tokenRouter)

module.exports = router