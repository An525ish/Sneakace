const mongoose = require('mongoose');
const { Schema } = mongoose;

const cuponSchema = new Schema({
    code: { type: String, required: true, unique: true },
    discount: { type: Number, required: true },
    category: { type: String, required: true, }

}, { timestamps: true });

const virtual = cuponSchema.virtual('id');
virtual.get(function () {
    return this._id;
});
cuponSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

exports.Cupon = mongoose.model('cupon', cuponSchema);