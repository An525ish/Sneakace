const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`connected to the database ${db.connection.host} `);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;