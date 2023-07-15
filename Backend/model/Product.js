const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  sku: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  saleCount: {
    type: Number,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  tag: {
    type: [String],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  variation: [
    {
      id: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      size: [
        {
          name: {
            type: String,
            required: true,
          },
          stock: {
            type: Number,
            required: true,
          },
          image: {
            type: [String],
            required: true,
          },
        },
      ],
    },
  ],
  image: {
    type: [String],
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
});

const virtualId = productSchema.virtual('id');
virtualId.get(function () {
  return this._id;
});

// we can't sort using the virtual fields. better to make this field at time of doc creation
// const virtualDiscountPrice =  productSchema.virtual('discountPrice');
// virtualDiscountPrice.get(function(){
//     return Math.round(this.price*(1-this.discountPercentage/100));
// })

productSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model('Product', productSchema);
