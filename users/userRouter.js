const express = require('express');
const server = require('../server');
const Users = require('./userDb');
const router = express.Router();

//[ ]
//ENDPOINTS

//[ ]
router.post('/', (req, res) => {
  // do your magic!
});

//[ ]
router.post('/:id/posts', (req, res) => {
  // do your magic!
});

//[x]
router.get('/', (req, res) => {
  Users.get()
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error while getting user list'});
    })
});

//[x]
router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

//[ ]
router.get('/:id/posts', (req, res) => {
  // do your magic!
});

//[ ]
router.delete('/:id', (req, res) => {
  // do your magic!
});

//[ ]
router.put('/:id', (req, res) => {
  // do your magic!
});

//[ ]
//custom middleware

//[ ]
function validateUserId(req, res, next) {
  //check that there is a user with that id
  const {id} = req.params;

  Users.getById(id)
    .then(data=>{
      if(data){
        req.user = data;
        next();
      }else{
        res.status(404).json({message:`User not found with id: ${id}`});
      }
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({message:'Server error while validating user id'});
    })
}   

//[ ]
function validateUser(req, res, next) {
  // do your magic!
}

//[ ]
function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
