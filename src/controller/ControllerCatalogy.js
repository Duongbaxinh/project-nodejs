const { response } = require("express");
const path = require("path");
const modelCatalogy = require("../model/Catology");



//
const itemStore = (req,res)=>{
  let catalogyId = req.params.id;
  console.log(req.params.id)
modelCatalogy.findById(catalogyId,(error,data)=>{
  console.log(data)
  res.json({
    data,
  })
})
}

const getItemStore = (req,res)=>{
  store.find({}).then((data)=>{
      res.json({
          data,
      })
  })
}
//show list catalogy
const showlistCatalogy = (req, res) => {
  modelCatalogy
    .find()
    .then((Response) => {
      res.json({
        Response,
      });
    })
    .catch((error) => {
      res.json({
        mesaage: "a error in occurent!",
      });
    });
};


// add a catalogy
const addCatalogy = (req, res) => {
  console.log(req.body);
  let catalogy = new modelCatalogy({
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
  });
  if (req.file) {
    const x = req.file.path;
    let c = x.indexOf("image");
    catalogy.avarta = x.substring(c);
  }
  catalogy
    .save()
    .then((Response) => {
      res.json({
        Response,
      });
    })
    .catch((error) => {
      res.json({
        mesaage: "an error in occurent!",
      });
    });
};
// update catalogy
const updateCatalogy = (req, res) => {
  console.log(req.body);
  let catalogyId = req.body.id;
  let catalogyUpdate = {
    Interactive: {
      like: req.body.like,
      unlike: req.body.unlike,
      comment: {
        quantity: req.body.comment,
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
  };
  modelCatalogy
    .findByIdAndUpdate(catalogyId, { $set: catalogyUpdate })
    .then((Response) => {
      res.json({
        Response,
      });
    })
    .catch((error) => {
      res.json({
        mesaage: "an error occurent!",
      });
    });
};
//delete catalogy

const deleteCatalogy = (req, res) => {
  let catalogyId = req.body.id;
  modelCatalogy.findByIdAndRemove(catalogyId).then((response) => {
    res
      .json({
        response,
        mesaage: "deleted!",
      })
      .catch((error) => {
        res.json({
          mesaage: "an error occurent!",
        });
      });
  });
};
module.exports = {
  showlistCatalogy,
  addCatalogy,
  updateCatalogy,
  deleteCatalogy,
  itemStore,
  getItemStore
};
