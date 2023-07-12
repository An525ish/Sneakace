const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`connected to the database`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;