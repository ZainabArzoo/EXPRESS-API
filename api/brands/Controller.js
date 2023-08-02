const { connect } = require("mongoose");
require("dotenv").config();
const Brand = require('./model')


const AddBrand = async (req, res) => {
    const { Brandname, Brandimage } = req.body
    try {
        await connect(process.env.MONGO_URL)

        const CheckDuplicate = await Brand.exists({ Brandname })

        if (CheckDuplicate) {

            res.json({
                message: "Brand Already Exists"
            })

        } else {

            await Brand.create({ Brandname, Brandimage })

            res.json({
                message: "Brand Added Successfully"
            })
        }
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

const BrandByName = async (req, res) => {
    const { Brandname } = req.params;
    try {
        await connect(process.env.MONGO_URL)
        const Brands = await Brand.find({ Brandname })
        res.json({
            Brands
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

const BrandById = async (req, res) => {

    const { _id } = req.query;
    try {
        await connect(process.env.MONGO_URL)
        const Brands = await Brand.find({ _id })
        res.json({
            Brands
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

const UpdateBrand = async (req, res) => {
    const { Brandname, Brandimage, _id } = req.body

    const filter = { _id }
    const target = { Brandname, Brandimage }

    try {
        await connect(process.env.MONGO_URL)
        const Brands = await Brand.findOneAndUpdate(filter, target)
        res.json({
            message: "Brand Updated successfully"
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

const DeleteBrand = async (req, res) => {
    const { Brandname } = req.body

    try {
        await connect(process.env.MONGO_URL)
        const Brands = await Brand.deleteOne({ Brandname })
        res.json({
            message: "Brand Deleted Successfully"
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}



module.exports = { AddBrand, BrandById, BrandByName, UpdateBrand, DeleteBrand }




