// const { Category } = require('../model/Category');
const { User } = require('../model/User');

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  console.log(id)
  try {
    const user = await User.findById(id);
    res.status(200).json({id:user.id,addresses:user.addresses,email:user.email,role:user.role});
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