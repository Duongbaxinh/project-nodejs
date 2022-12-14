const  express = require("express");
const  conTroller = require('../controller/Controller')
const catalogyCtr = require('../controller/ControllerCatalogy')
const upload = require('../middlewear/upload')
const controllerStore = require('../controller/ControllerStore')
const router = express.Router();

const getRouter = (app)=>{
    router.get('/showList',catalogyCtr.showlistCatalogy)
    router.get('/getItemStore',controllerStore.getItemStore)
    // router.get('/getItemStore/:id',catalogyCtr.itemStore)
    router.post('/addCatalogy',upload.single("avarta"),catalogyCtr.addCatalogy)
    router.put('/updateCatalogy',catalogyCtr.updateCatalogy)
    router.delete('/deleteCatalogy',catalogyCtr.deleteCatalogy)
    return app.use('/api/catalogy',router)
}
module.exports = getRouter;