const express = require('express');

//require functions from the db models:

// const { getById } = require('../posts/postDb');
const Users = require('./userDb');


//instantiate router:
const router = express.Router();

router.post('/', (req, res) => {
  //POST /api/users/
});

router.post('/:id/posts', (req, res) => {
  // POST /api/users/:id/posts
});

router.get('/', (req, res) => {
  // GET /api/users/
  Users.get()
    .then(data=>{
      res.status(200).json({data});
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error  retrieving users.'});
    })
});

router.get('/:id', validateUserId, (req, res) => {
  // GET /api/users/:id
  // [x]
  res.status(200).send(req.user)
});

router.get('/:id/posts', (req, res) => {
  // GET /api/users/:id/posts
  // [ ]
});

router.delete('/:id', (req, res) => {
  // DELETE /api/users/:id
  // [ ]
});

router.put('/:id', (req, res) => {
  // PUT /api/users/:id
  // [ ]
});

//custom middleware
// [ ]

//validateUserId
// [x]
function validateUserId(req, res, next) {
  const {id} = req.params;

  Users.getById(id)
    .then(data=>{

      if(data){
        console.log("VALID ID");
        console.log(data);
        req.user = data;
        next();
      }else{
        console.log("INVALID ID");
        console.log(data);
        res.status(400).json({message:`There is no user with id: ${id}`});
        next();
      }

    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({message:'Server error while retrieving user id'});
      next();
    })
}

//validateUser
// [ ]
function validateUser(req, res, next) {
  // do your magic!
}

//validatePost
// [ ]
function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
