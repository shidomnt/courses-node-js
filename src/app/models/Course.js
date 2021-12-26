const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

mongoose.plugin(slug)
const Schema = mongoose.Schema

const Course = new Schema({
  title: { type: String, maxlength: 255 },
  thumbnail_cdn: { type: String, maxlength: 255 },
  description: { type: String, maxlength: 255 },
  preview_youtube_id: { type: String },
  level: { type: String },
  slug: { type: String, slug: 'title', unique: true },
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true,
  }
})

Course.plugin(mongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: 'all',
})

// Course tu dong duoc chuyen ve dang snake case va
// duoc chuyen sang so nhieu: courses
module.exports = mongoose.model('Course', Course)
