
const express =require('express');
const bodyParser =require('body-parser');
const initView = require('./config/configViewEngine')
const initRouter = require('./router/routerWeb')
const initAuthor = require('./router/author')
const templet = require('./router/routerTemplate')
const db = require('./config/connectDb')
const app = express();
const port = 3000;
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-with,content-type')
    res.setHeader('Access-Control-Allow-Credentials',true);
    next(); 
  })
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json());
db();
initView(app);
initRouter(app);
initAuthor(app)
initAuthor(app);
templet(app);

app.listen(port,()=>{
    console.log('running on port',port)
})