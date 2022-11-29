const author = require("../model/author");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const catalogy = require('../model/Catology')
const getAuthor = (req,res)=>{
  author.find({},(error,data)=>{
    res.render('index',{datas:data})
  })
}
const addAuthor = (req, res) => {
  res.render("form_login");
};
const getFormRegister = (req,res)=>{
  res.render('form_register');
}
const regist = (req, res) => {
  console.log(req.body);
  author.findOne({email:req.body.email}).then((data)=>{
    if(data){
      res.send('acount readly')
    }else{
       bcrypt.hash(req.body.passWord, 10).then(function (hash) {
    let user = new author({
      userName: req.body.userName,
      email: req.body.email,
      phone: req.body.phone,
      passWord: hash,
    });
    user.save().then((data) => {
      res.render('form_login');
    });
  });
    }
  })
 
};
const login = async (req, res, next) => {
  let userNames = req.body.userName;
  let passWord = req.body.passWord;
  author.findOne({ userName: userNames })
    .then((user) => {
      if (user) {
        bcrypt.compare(passWord, user.passWord).then(function (result) {
          console.log(result);
          if (result === true) {
            let token = jwt.sign({ name: user.name }, "tokentviraty", {
              expiresIn: "1h",
            });
            catalogy.find({}).then((data)=>{
              res.redirect('/')
            })
          } else {
            res.send("password incorect");
          }
        });
      } else {
        res.send(`you haven't been acount`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { regist, login, addAuthor ,getFormRegister,getAuthor};
