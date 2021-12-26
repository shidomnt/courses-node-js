module.exports = {
    multipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map( item => item.toObject() )
    },
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose
    }
}
