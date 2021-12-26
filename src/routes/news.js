const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

router.route('/').get(newsController.index)
router.route('/:slug').get(newsController.show)

module.exports = router
