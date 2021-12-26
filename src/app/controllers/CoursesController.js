const Course = require('../models/Course')
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose')

class CoursesController {
  async index(_req, res, next) {
    try {
      let courses = await Course.find({})
      res.render('courses', {
        courses: multipleMongooseToObject(courses),
      })
    } catch (err) {
      next(err)
    }
  }

  async detail(req, res, next) {
    try {
      const slug = req.params.slug
      let course = await Course.findOne({ slug: slug })
      res.render('courses/detail', {
        course: mongooseToObject(course),
      })
    } catch (err) {
      next(err)
    }
  }

  create(_req, res) {
    res.render('courses/create')
  }

  async store(req, res, next) {
    try {
      const course = new Course(req.body)
      await course.save()
      res.redirect(`/courses`)
    } catch (err) {
      next(err)
    }
  }

  async edit(req, res, next) {
    try {
      let course = await Course.findById(req.params._id)
      res.render('courses/edit', {
        course: mongooseToObject(course)
      })
    } catch (err) {
      next(err)
    }
  }

  async update(req, res, next) {
    try {
      await Course.findByIdAndUpdate(req.params._id, req.body)
      res.redirect('/me/stored/courses')
    } catch (err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      await Course.delete( { _id: req.params._id } )
      res.redirect('back')
    } catch (err) {
      next(err)
    }
  }

  async restore(req, res, next) {
    try {
      await Course.restore( { _id: req.params._id })
      res.redirect('back')
    } catch(err) {
      next(err)
    }
  }

  async destroy(req, res, next) {
    try {
      await Course.findByIdAndDelete(req.params._id)
      res.redirect('back')
    } catch(err) {
      next(err)
    }
  }
}

module.exports = new CoursesController()
