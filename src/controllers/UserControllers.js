const User = require("../models/user.js")
module.exports = {
    async show(rec,res) {
        try {
            const {userId} = req.params
            const user = await User.find({
                _id: userId
            })
            console.log(user)
            res.json({user})
        } catch (err) {
            console.log(err)
            res.json({msg:'Problemas no servidor'})
        }
    },
    async list(rec,res) {
        try {
            const user = await User.find()
            console.log(user)
            res.json({user})
        } catch (err) {
            console.log(err)
            res.json({msg:'Problemas no servidor'})
        }
    },
    async create(rec,res) {
        try {
            const {nome,cidade,idade} = rec.body
            const user = await User.create({nome,cidade,idade})
            console.log(user)
            res.json({user})
        } catch (err) {
            console.log(err)
            res.json({msg:'Problemas no servidor'})
        }
    },
    async update(rec,res) {
        try {
            const {nome,cidade,idade} = rec.body
            const {userid} = req.params
            const user = await User.findByIdAndUpdate({
                _id: userid
            },{
                nome,
                cidade,
                idade
            },{
                new: true
            })
            console.log(user)
            res.json({user})
        } catch (err) {
            console.log(err)
            res.json({msg:'Problemas no servidor'})
        }
    },
    async delete(rec,res) {
        try {
            const {userid} = req.params
            const user = await User.findOneAndDelete({
                _id: userid
            },{
                nome,
                cidade,
                idade
            },{
                new: true
            })
            console.log(user)
            res.json({user})
        } catch (err) {
            console.log(err)
            res.json({msg:'Problemas no servidor'})
        }
    }
}
