const catalogy = require('../model/Catology')
const author = require('../model/author')
const au = require("./AuthorController")

const getList = (req,res,next)=>{
catalogy.find({},(error,data)=>{
      res.render('index',{catalogys:data})
})
}
const getItem =(req,res)=>{
  console.log("id", req.params.id)
  let id = req.params.id
   catalogy.findById(id,(error,data)=>{
    res.redirect('/')
  })
}

const getFormAdd = (req,res,next)=>{
  res.render('form_addItem')
}
const addCatalogy= (req,res,next)=>{ 
  console.log(req.file.path)
    const item = new catalogy({
      
        Interactive: {
            like: req.body.like,
            unlike: req.body.unlike,
            comment: {
              quantity: req.body.quantity,
              content: req.body.content,
            },
          },
          information: {
            foodName: req.body.foodName,
            origin: req.body.origin,
          },
          ingredient: {
            nameIngredient: req.body.nameIngredient,
            mass: req.body.mass,
              list: req.body.list,
          },
    });
   
    if(req.file.path){
         let path = req.file.path
       let pathAvata = path.substring(path.indexOf('image'));
       item.avarta = pathAvata
    } 
    
    item.save().then(()=>{
      res.redirect('/')
    })
    
}

const getFormUpdate = (req,res)=>{
  let catalogyid = req.params.id
  catalogy.findById(catalogyid).then(data=>{
    res.render('form_update',{item:data})
  })
}


const updata = (req,res,next)=>{
  console.log('danh sach', req.body)
  
  let catalogyUpdate ={
    Interactive: {
        like: req.body.like,
        unlike: req.body.unlike,
        comment: {
          quantity: req.body.quantity,
          content: req.body.content,
        },
      },
      information: {
        foodName: req.body.foodName,
        origin: req.body.origin,
      },
      ingredient: {
        nameIngredient: req.body.nameIngredient,
        mass: req.body.mass,
        active: {
          list: req.body.list,
        },
      },
}
if(req.file){
  let path = req.file.path
let pathAvata = path.substring(path.indexOf('image'));
catalogyUpdate.avarta = pathAvata
} else if(req.file.path === undefined){
  catalogy.avarta = req.body.oldid
}
  catalogy.findByIdAndUpdate(req.body.id,{$set:catalogyUpdate}).then((data)=>{
    res.redirect('/')
  })
}
const deleteItem = (req, res) => {
  let catalogyId = req.params.id;
  catalogy.findByIdAndRemove(catalogyId).then(()=>{
    res.redirect('/')
  })
  
};

const getCongThuc = (req,res)=>{
  let id = req.body.id
  catalogy.findById(id,(error,data)=>{
    res.render('pageCongThuc',{datas:data})
})
}
const getHome = (req,res)=>{
  res.redirect('/')
}
module.exports = {getList,addCatalogy,
  getItem,deleteItem,getFormUpdate,updata,getFormAdd,getCongThuc,getHome}
