const Router = require('express')
const router = new Router()
const tokenController = require('../controllers/tokenController')


router.post('/', tokenController.create)
router.get('/', tokenController.getAll)
router.get('/:id', tokenController.getOne)


module.exports = router