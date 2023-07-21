// const { Category } = require('../model/Category');
const { User } = require('../model/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.fetchUserById = async (req, res) => {
  const { email } = req.params;
  const user= await User.find({email:email})
  // console.log(user)
  try {
    const findUser = await User.findById(user[0]._id);
    res.status(200).json({
      id:findUser.id,
      firstName:findUser.firstName,
      lastName:findUser.lastName,
      email:findUser.email,
      address:findUser.address,
      zipcode:findUser.zipcode,
      state:findUser.state,
      city:findUser.city,
      role:findUser.role
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user= await User.find({email:id})
  // console.log(req.params)
  
  try {
    const findUser = await User.findByIdAndUpdate(user[0]._id, req.body, { new: true });
    // console.log(findUser)
    res.status(200).json(findUser);
  } catch (err) {
    console.log(err)
    // res.status(400).json(err);
  }
};
