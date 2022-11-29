const express = require('express')
const router = express.Router();
const upload = require('../middlewear/upload')
const controller = require('../controller/Controller')
const ControllerCatalogy = require('../controller/ControllerCatalogy')
const controllerAuthor = require('../controller/AuthorController')
const controllerStore = require('../controller/ControllerStore')
const routerTemplate = (app)=>{ 
    router.get('/', controller.getList)
    router.post('/store/:id',controller.getItem)

    router.get('/deleteStore/:id',controllerStore.deleteStore)
    router.post('/saveStore',controllerStore.saveStore)

    router.post('/resigst',controllerAuthor.regist)
    router.post('/login',controllerAuthor.login)
   router.get('/delete/:id',controller.deleteItem)
   router.get('/update/:id',controller.getFormUpdate)
   router.post('/updateItem',upload.single("avarta"),controller.updata)
   router.get('/form_addItem',controller.getFormAdd)
   router.post('/addItem',upload.single("avarta"),controller.addCatalogy)
   router.post('/getCongThuc' ,controller.getCongThuc)
   router.get('/getHome',controller.getHome)
    app.use('/',router)
}


   
module.exports = routerTemplate
