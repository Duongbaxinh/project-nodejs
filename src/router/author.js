const express = require('express')
const router = express.Router()
const controllerAuthor = require('../controller/AuthorController')
const author = (app)=>{
    router.get('/showauthor',controllerAuthor.getAuthor)
    router.get('/login_form',controllerAuthor.addAuthor)
    router.get('/form_register',controllerAuthor.getFormRegister)
    router.post('/resigst',controllerAuthor.regist)
    router.post('/login',controllerAuthor.login)
    app.use('/author',router)
}
module.exports = author