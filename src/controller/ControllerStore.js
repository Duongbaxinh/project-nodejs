const { model } = require('mongoose')
const { fields } = require('../middlewear/upload')
const store = require('../model/store')

const getItemStore = (req,res)=>{
    store.find({}).then((data)=>{
        res.json({
            data,
        })
    })
}
const saveStore = (req,res)=>{
    console.log(req.body)
    let item = new store({
        idCatalogy:req.body.idCatalogy,
        avartar: req.body.avartar,
        foodName:req.body.foodName,
    })
    item.save().then(()=>{
        res.redirect('/')
    })
}

const deleteStore = (req,res)=>{
    let id = req.params.id
    console.log(id)
    store.findByIdAndRemove(id).then(()=>{
        res.redirect('/')
    })
}
module.exports = {getItemStore,saveStore,deleteStore}