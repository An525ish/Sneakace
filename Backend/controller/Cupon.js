const { Cupon } = require("../model/Cupon");

exports.fetchCupons = async (req, res) => {
    try {
        const cupons = await Cupon.find({}).exec();
        res.status(200).json(cupons);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.createCupon = async (req, res) => {
    const cupon = new Cupon(req.body);
    try {
        const doc = await cupon.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.deleteCupon = async (req, res) => {
    const { id } = req.params;
    try {
        const cupon = await Cupon.findByIdAndDelete(id);
        res.status(200).json(cupon);
    } catch (err) {
        res.status(400).json(err);
    }
};
exports.updateCupon = async (req, res) => {
    const { id } = req.params;
    try {
        const cupon = await Cupon.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(cupon);
    } catch (err) {
        res.status(400).json(err);
    }
}