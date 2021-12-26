const express = require('express')
const meController = require('./../app/controllers/MeController')
const router = express.Router()

router
  .route('/stored/courses')
  .get(meController.storedCourses)

router
  .route('/trash/courses')
  .get(meController.trashCourses)

module.exports = router
