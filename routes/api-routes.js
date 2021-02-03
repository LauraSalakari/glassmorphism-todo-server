const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItem.model");
const TodoList = require("../models/TodoList.model");

// post todo lists
router.post("/createlist", (req, res) => {
  const {title, colour} = req.body;

  if(!title){
    res.status(500).json({
      errorMessage: "Your todo list must have a title!"
    })
    return;
  }

  TodoList.create({title, colour})
  .then((list) => {
    console.log(list)
    res.status(200).json(list)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      errorMessage: "Failed to create a new todo list"
    })
  })
})

// get todo lists
router.get("/todolists", (req, res) => {
  TodoList.find()
  .then((lists) => {
    res.status(200).json(lists)
  }) 
  .catch((err) => {
    res.status(500).json({
      errorMessage: "Failed to fetch todo lists"
    })
  })
})

// post todo items
router.post("/createitem", (req, res) => {
  console.log("here")
  const {name, details, completed, list} = req.body;
  console.log(name, details, completed, list)
  
  if(!name){
    res.status(500).json({
      errorMessage: "Your todo item must have a name!"
    })
    return;
  }

  TodoItem.create({name, details, completed, list})
  .then((item) => {
    console.log(item)
    res.status(200).json(item)
  })
  .catch((err) => {
    console.log("error creating todo item", err);
    res.status(500).json({
      errorMessage: "Failed to create a new todo item"
    })
  })
})

// get todo items
router.get("/todoitems/:id", (req,res) => {
  TodoItems.find({list: req.params.id})
  .then((items) => {
    res.status(200).json(items)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      errorMessage: "Failed to fetch todo items"
    })
  })
})

// edit todo item


// delete todo list 


// delete todo item



module.exports = router;