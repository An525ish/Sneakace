const { Address } = require("../models/UserAddress")

exports.getAllAddress = async (req, res) => {
    try {
        const address = await Address.findOne({ userID: req.user.id })
        console.log(address)
        if (address?.address) {
            return res.status(200).json({ ok: true, address: address.address })
        }
        return res.status(200).json({ ok: false, message: "no address found" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, message: "internal server error" })
    }
};

exports.PostAddress = async (req, res) => {

    const { street, city, state, zip, country, mobile } = req.body;

    if (!street && !city && !state && !zip && !country && !mobile) {
        return res.status(400).json({ ok: false, message: "all fields are required" })
    }

    try {
        const address = await Address.create({
            userID: req.user.id,
            address: req.body
        })
        return res.status(200).json({ ok: true, address })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, message: "internal server error" })
    }

};
