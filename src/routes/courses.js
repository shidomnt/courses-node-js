const express = require('express')
const courseController = require('./../app/controllers/CoursesController')
const router = express.Router()

router
  .route('/create')
  .get(courseController.create)

router
  .route('/store')
  .post(courseController.store)

router
  .route('/:_id/edit')
  .get(courseController.edit)

router
  .route('/:_id')
  .put(courseController.update)
  .delete(courseController.delete)

router
  .route('/:_id/restore')
  .patch(courseController.restore)

router
  .route('/:_id/destroy')
  .delete(courseController.destroy)

router
  .route('/:slug')
  .get(courseController.detail)

router
  .route('/')
  .get(courseController.index)

module.exports = router
