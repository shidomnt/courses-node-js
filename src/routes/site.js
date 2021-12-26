const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.route('/').get(siteController.index)

router.route('/search').get(siteController.search)

module.exports = router
