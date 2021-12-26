const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
  async storedCourses(_req, res, next) {
    try {
      let courses = await Course.find({})
      res.render('me/stored-courses', {
        courses: multipleMongooseToObject(courses)
      })
    } catch(err) {
      next(err)
    }
  }

  async trashCourses(_req, res, next) {
    try {
      let courses = await Course.findDeleted({})
      res.render('me/trash-courses', {
        courses: multipleMongooseToObject(courses)
      })
    } catch(err) {
      next(err)
    }
  }
}

module.exports = new MeController()
